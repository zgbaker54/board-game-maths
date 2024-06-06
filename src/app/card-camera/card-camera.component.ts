import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { WebcamModule, WebcamImage } from 'ngx-webcam';
import { ButtonModule } from 'primeng/button';
import { Observable, Subject } from 'rxjs';
import { createScheduler, createWorker } from 'tesseract.js';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import levenshtein from 'js-levenshtein';
import { Card } from '../shared/models/deck.model';
import { Game } from '../shared/models/game.model';

declare var Marvin: any;
declare var MarvinImage: any;

@Component({
  selector: 'app-card-camera',
  standalone: true,
  imports: [CommonModule, WebcamModule, ButtonModule, ProgressSpinnerModule],
  templateUrl: './card-camera.component.html',
  styleUrl: './card-camera.component.scss',
})
export class CardCameraComponent implements OnInit {
  @ViewChild('screenshot', { static: false }) canvasRef!: ElementRef;
  canvas: HTMLCanvasElement | null = null;
  ctx: CanvasRenderingContext2D | null = null;

  @Input() metadata!: Game;

  windowFocused = true;
  state: 'none' | 'capture' | 'scan' | 'display' = 'none';
  scans = 0;

  cardNames: string[] = [];

  foundCard?: Card;
  rules: string[] = [];
  unknownCard: Card = {
    name: 'Unknown',
    properties: {},
  };
  scanningCard: Card = {
    name: 'Scanning',
    properties: {},
  };

  text = '';
  bestMatch = '';
  smallestDistance = Infinity;

  private trigger: Subject<any> = new Subject();
  public webcamImage!: WebcamImage;
  private nextWebcam: Subject<any> = new Subject();
  sysImage = '';

  width = 500;

  @HostListener('window.resize', ['$event'])
  onResize() {
    this.width = Math.min(300, window.innerWidth);
  }

  @HostListener('window:focus', ['$event'])
  onFocus(): void {
    this.windowFocused = true;
  }

  @HostListener('window:blur', ['$event'])
  onBlur(): void {
    this.windowFocused = false;
  }

  constructor() {}

  ngOnInit(): void {
    this.onResize();
    this.parseCardNames();
  }

  parseCardNames() {
    const cardNames = new Set<string>();
    this.metadata.decks.forEach((deck) => {
      deck.cards.forEach((card) => {
        cardNames.add(card.name.toLowerCase());
      });
    });
    this.cardNames = [...cardNames];
  }

  public getSnapshot(): void {
    this.trigger.next(void 0);
  }

  public captureImg(webcamImage: WebcamImage): void {
    this.state = 'scan';
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage!.imageAsDataUrl;
    this.smallestDistance = Infinity;
    this.foundCard = this.scanningCard;
    this.rules = [];
    this.scans = 0;
    this.drawMarvinJText();
  }

  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }

  compareText(text: string) {
    text = text.trim().toLowerCase();
    for (const name of this.cardNames) {
      const distance = levenshtein(text, name);
      if (distance < this.smallestDistance) {
        this.smallestDistance = distance;
        this.bestMatch = name;
        this.text = text;
        this.handleNewMatch();
      }
    }
  }

  handleNewMatch() {
    this.metadata.decks.forEach((deck) => {
      deck.cards.forEach((card) => {
        if (card.name.toLowerCase() === this.bestMatch) {
          this.foundCard = card;
        }
      });
    });

    this.rules = [];
    this.foundCard?.rules?.forEach((rule) => {
      this.rules.push(this.metadata?.rules?.[rule] ?? '');
    });
    this.rules = this.rules.filter((x) => x);
  }

  async getText(blobs: string[]) {
    // console.log('new text scan');
    // const worker = await createWorker('eng');
    // const ret = await worker.recognize(blob);
    // this.compareText(ret.data.text);
    // await worker.terminate();

    this.scans++;

    setTimeout(async () => {
      if (this.scans > 0) {
        console.log('Terminating OCR');
        await scheduler.terminate();
        this.foundCard = this.unknownCard;
        this.scans--;
        this.state = 'display';
      }
    }, 10000);

    const scheduler = createScheduler();
    const worker1 = await createWorker('eng');
    const worker2 = await createWorker('eng');
    (async () => {
      this.scans++;
      scheduler.addWorker(worker1);
      scheduler.addWorker(worker2);
      const results = await Promise.all(
        blobs.map((blob) => scheduler.addJob('recognize', blob))
      );
      results.forEach((r) => {
        console.log(r.data.text);
        this.compareText(r.data.text);
      });
      await scheduler.terminate();
      this.scans--;
    })();
    this.scans--;
    console.log('scheduled');
  }

  drawMarvinJText() {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas?.getContext('2d') ?? null;
    if (this.ctx === null || this.canvas === null) {
      return;
    }

    let image = new MarvinImage();
    image.load(this.sysImage, async () => {
      var factor = image.getWidth() / this.width;
      var cropped = new MarvinImage(this.width, image.getHeight() / factor);
      Marvin.scale(image, cropped, this.width);
      this.width = Math.min(300, window.innerWidth, cropped.getWidth());
      this.canvas!.width = cropped.getWidth();
      this.canvas!.height = cropped.getHeight();
      cropped.draw(this.canvas);

      var segments = Marvin.findTextRegions(image, 15, 8, 30, 150);
      const blobs: string[] = [];
      for (var i in segments) {
        var seg = segments[i];
        if (seg.height >= 5) {
          var cropped = new MarvinImage(1, 1);
          Marvin.crop(
            image,
            cropped,
            seg.x1 + 1,
            seg.y1 - 5,
            seg.width,
            seg.height + 10
          );
          blobs.push(cropped.toBlob());
        }
      }
      console.log(blobs.length);
      await this.getText(blobs);
      this.state = 'display';
    });
  }
}
