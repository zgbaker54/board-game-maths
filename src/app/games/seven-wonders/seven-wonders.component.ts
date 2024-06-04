import { AfterViewInit, Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { sevenWondersMetadata } from '../../metadata/seven-wonders.metadata';
import { GameService } from '../../shared/services/game.service';
import { WebcamModule, WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

declare var Marvin: any;
declare var MarvinImage: any;

const tabletSvg = '/assets/images/games/7-wonders/tablet.svg';
const compassSvg = '/assets/images/games/7-wonders/compass.svg';
const gearSvg = '/assets/images/games/7-wonders/gear.svg';

type Science = { name: string; code: string; count: number };

type Point = [number, number];

@Component({
  selector: 'app-seven-wonders',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    SectionTitleComponent,
    TableModule,
    CardModule,
    WebcamModule,
  ],
  templateUrl: './seven-wonders.component.html',
  styleUrl: './seven-wonders.component.scss',
})
export class SevenWondersComponent implements AfterViewInit {
  game = sevenWondersMetadata;

  // Science Cards
  science: Science[] = [
    { name: `<img src="${tabletSvg}">`, code: 'T', count: 0 },
    { name: `<img src="${compassSvg}">`, code: 'C', count: 0 },
    { name: `<img src="${gearSvg}">`, code: 'G', count: 0 },
    {
      name: `<img src="${tabletSvg}"> / <img src="${compassSvg}"> / <img src="${gearSvg}">`,
      code: 'TCG',
      count: 0,
    },
    {
      name: `<img src="${tabletSvg}"> / <img src="${compassSvg}">`,
      code: 'TC',
      count: 0,
    },
    {
      name: `<img src="${tabletSvg}"> / <img src="${gearSvg}">`,
      code: 'TG',
      count: 0,
    },
    {
      name: `<img src="${compassSvg}"> / <img src="${gearSvg}">`,
      code: 'CG',
      count: 0,
    },
  ];
  scienceCombinations = new Set<string>();
  maxScienceScore = 0;
  maxScienceCombo = '';

  // Image Processing
  private trigger: Subject<any> = new Subject();
  public webcamImage!: WebcamImage;
  private nextWebcam: Subject<any> = new Subject();
  sysImage = '';

  featuresCornersMap: number[][] = [];

  constructor(private gameService: GameService) {}

  ngAfterViewInit(): void {
    // var canvas = document.getElementById('canvasAutoCrop') as HTMLCanvasElement;
    // // console.log(Marvin);
    // console.log(MarvinImage);
    // console.log(canvas);
    // if (canvas === null) {
    //   return;
    // }
    // let imageAutoCrop = new MarvinImage();
    // imageAutoCrop.load('/assets/images/card.jpg', () => {
    //   imageAutoCrop.draw(canvas);
    //   this.detectCorners(imageAutoCrop);
    //   this.clusterCorners();
    // });
  }

  public getSnapshot(): void {
    this.trigger.next(void 0);
  }

  public captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage!.imageAsDataUrl;
    this.drawMarvinImage();
    console.info('got webcam image', this.sysImage);
  }

  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }

  drawMarvinImage() {
    let canvas = document.getElementById('canvasAutoCrop') as HTMLCanvasElement;
    if (canvas === null) {
      return;
    }
    let imageAutoCrop = new MarvinImage();
    imageAutoCrop.load(this.sysImage, () => {
      var factor = imageAutoCrop.getWidth() / 400;
      var image = new MarvinImage(400, imageAutoCrop.getHeight() / factor);
      Marvin.scale(imageAutoCrop, image, 400);
      canvas.width = image.getWidth();
      canvas.height = image.getHeight();
      image.draw(canvas);
      this.detectCorners(image);
      this.clusterCorners(image);
    });
  }

  detectCorners(image: typeof MarvinImage) {
    var canvas = document.getElementById('canvasAutoCrop') as HTMLCanvasElement;
    if (canvas === null) {
      return;
    }

    this.featuresCornersMap = Marvin.moravec(image.clone(), image, 5, 10000);

    // var ctx = canvas.getContext('2d');

    // if (ctx === null) {
    //   return;
    // }

    // for (var x = 0; x < this.featuresCornersMap.length; x++) {
    //   for (var y = 0; y < this.featuresCornersMap.length; y++) {
    //     if (this.featuresCornersMap[x][y] > 0) {
    //       // scale up the corners coordinates
    //       ctx.fillRect(Math.floor(x * factor), Math.floor(y * factor), 10, 10);
    //     }
    //   }
    // }
  }

  clusterCorners(imageAutoCrop: typeof MarvinImage) {
    var canvas = document.getElementById('canvasAutoCrop') as HTMLCanvasElement;
    if (canvas === null) {
      return;
    }

    var ctx = canvas.getContext('2d');
    if (ctx === null) {
      return;
    }

    const points: Point[] = [];
    for (var x = 0; x < this.featuresCornersMap.length; x++) {
      for (var y = 0; y < this.featuresCornersMap.length; y++) {
        if (this.featuresCornersMap[x][y] > 0) {
          points.push([x, y]);
        }
      }
    }

    console.log(points);

    const clusters = dbscan(points, 10, 3);
    console.log(clusters);

    var factor = imageAutoCrop.getWidth() / 400;
    clusters.forEach((cluster) => {
      ctx!.fillStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      },0.6)`;

      const xValues = cluster.map((x) => x[0]);
      const yValues = cluster.map((x) => x[1]);
      let minX = Math.min(...xValues);
      let maxX = Math.max(...xValues);
      let minY = Math.min(...yValues);
      let maxY = Math.max(...yValues);

      ctx!.fillRect(
        Math.floor(minX * factor),
        Math.floor(minY * factor),
        Math.floor((maxX - minX) * factor),
        Math.floor((maxY - minY) * factor)
      );

      cluster.forEach((point) => {

        ctx!.fillRect(
          Math.floor(point[0] * factor),
          Math.floor(point[1] * factor),
          10,
          10
        );
      });
    });
  }

  adjustScience(science: Science, adjust: number) {
    science.count += adjust;
    science.count = Math.max(0, science.count);
    this.calculateScience();
  }

  setScience(science: Science, value: number) {
    science.count = value;
    science.count = Math.max(0, science.count);
    this.calculateScience();
  }

  calculateScience(): void {
    const base =
      'T'.repeat(this.science[0].count) +
      'C'.repeat(this.science[1].count) +
      'G'.repeat(this.science[2].count);
    const options: string[][] = [];
    this.scienceCombinations = new Set<string>();

    for (let i = 3; i <= 6; i++) {
      for (let s = 0; s < this.science[i].count; s++) {
        options.push(this.science[i].code.split(''));
      }
    }

    if (options.length > 0) {
      this.generateCombinations(options.length, options, '');
    }

    this.maxScienceScore = this.scienceValue(base);
    this.maxScienceCombo = base;
    [...this.scienceCombinations].forEach((combo) => {
      const score = this.scienceValue(base + combo);
      if (score > this.maxScienceScore) {
        this.maxScienceScore = score;
        this.maxScienceCombo = base + combo;
      }
    });
  }

  generateCombinations(
    rolls: number,
    options: string[][],
    combination: string
  ) {
    const option = options[rolls - 1];

    if (rolls === 0) {
      const array = combination.split('');
      array.sort((a, b) => a.localeCompare(b));
      combination = array.join('');
      this.scienceCombinations.add(combination);
      return;
    }

    // Loop through all possible dice values (1 to 6)
    for (let i = 0; i < option.length; i++) {
      this.generateCombinations(rolls - 1, options, combination + option[i]);
    }
  }

  scienceValue(science: string): number {
    const items = science.split('');
    const T = items.filter((x) => x === 'T').length;
    const C = items.filter((x) => x === 'C').length;
    const G = items.filter((x) => x === 'G').length;
    let total = 0;
    total += T ** 2;
    total += C ** 2;
    total += G ** 2;
    total += Math.min(T, C, G) * 7;

    return total;
  }

  scienceString(science: string): string {
    const items = science.split('');
    const T = items.filter((x) => x === 'T').length;
    const C = items.filter((x) => x === 'C').length;
    const G = items.filter((x) => x === 'G').length;

    return `<img src="${tabletSvg}"> x${T} / <img src="${compassSvg}"> x${C} / <img src="${gearSvg}"> x${G}`;
  }
}

const euclideanDistance = (point1: Point, point2: Point): number => {
  const [x1, y1] = point1;
  const [x2, y2] = point2;
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

const dbscan = (
  points: Point[],
  threshold: number,
  minPoints: number
): Point[][] => {
  const clusters: Point[][] = [];
  const visited = new Set<number>();
  const noise = new Set<number>();

  const getNeighbors = (pointIndex: number): number[] => {
    const neighbors: number[] = [];
    for (let i = 0; i < points.length; i++) {
      if (euclideanDistance(points[pointIndex], points[i]) <= threshold) {
        neighbors.push(i);
      }
    }
    return neighbors;
  };

  const expandCluster = (
    pointIndex: number,
    neighbors: number[],
    cluster: Point[]
  ): void => {
    cluster.push(points[pointIndex]);
    visited.add(pointIndex);

    let i = 0;
    while (i < neighbors.length) {
      const neighborIndex = neighbors[i];

      if (!visited.has(neighborIndex)) {
        visited.add(neighborIndex);
        const newNeighbors = getNeighbors(neighborIndex);
        if (newNeighbors.length >= minPoints) {
          neighbors.push(...newNeighbors);
        }
      }

      if (
        !clusters.some((cluster) => cluster.includes(points[neighborIndex]))
      ) {
        cluster.push(points[neighborIndex]);
      }

      i++;
    }
  };

  for (let i = 0; i < points.length; i++) {
    if (visited.has(i)) continue;

    const neighbors = getNeighbors(i);
    if (neighbors.length < minPoints) {
      noise.add(i);
    } else {
      const newCluster: Point[] = [];
      expandCluster(i, neighbors, newCluster);
      clusters.push(newCluster);
    }
  }

  return clusters;
};
