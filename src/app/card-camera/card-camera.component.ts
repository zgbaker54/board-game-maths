import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { WebcamModule, WebcamImage } from 'ngx-webcam';
import { ButtonModule } from 'primeng/button';
import { Observable, Subject } from 'rxjs';
import { createWorker } from 'tesseract.js';
import { sevenWondersMetadata } from '../metadata/seven-wonders.metadata';

declare var Marvin: any;
declare var MarvinImage: any;

@Component({
  selector: 'app-card-camera',
  standalone: true,
  imports: [CommonModule, WebcamModule, ButtonModule],
  templateUrl: './card-camera.component.html',
  styleUrl: './card-camera.component.scss',
})
export class CardCameraComponent {
  @ViewChild('screenshot', { static: false }) canvasRef!: ElementRef;
  canvas: HTMLCanvasElement | null = null;
  ctx: CanvasRenderingContext2D | null = null;

  cardData = sevenWondersMetadata;

  foundCard = '';

  text: string[] = [];

  private trigger: Subject<any> = new Subject();
  public webcamImage!: WebcamImage;
  private nextWebcam: Subject<any> = new Subject();
  sysImage = '';

  width = 300;

  @HostListener('window.resize', ['$event'])
  onResize() {
    this.width = Math.min(300, window.innerWidth);
  }

  constructor() {
    this.onResize();
  }

  public getSnapshot(): void {
    this.trigger.next(void 0);
  }

  public captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage!.imageAsDataUrl;
    this.text = [];
    this.drawMarvinJText();
  }

  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }

  compareText(text: string) {
    this.cardData.decks.forEach(deck => {
      deck.cards.forEach(card => {
        if(text.trim().toUpperCase() === card.name.toUpperCase()) {
          this.foundCard = card.name;
        }
      })
    })
  }

  async getText(blob: string) {
    console.log('Getting Text: ', blob)
    const worker = await createWorker('eng');
    const ret = await worker.recognize(blob);
    console.log('Result: ', ret.data.text);
    this.text.push(ret.data.text);
    this.compareText(ret.data.text);
    await worker.terminate();
  }

  drawMarvinJText() {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas?.getContext('2d') ?? null;
    if (this.ctx === null || this.canvas === null) {
      return;
    }

    let image = new MarvinImage();
    image.load(this.sysImage, () => {
      var segments = Marvin.findTextRegions(image, 15, 8, 30, 150);
      for(var i in segments) {
        var seg = segments[i];
        if(seg.height >= 5){ 
          image.drawRect(seg.x1, seg.y1-5, seg.width, seg.height+10, 0xFFFF0000); 
          // image.drawRect(seg.x1+1, seg.y1-4, seg.width-2, seg.height+8, 0xFFFF0000); 

          var cropped = new MarvinImage(1,1);
          Marvin.crop(image, cropped, seg.x1+1, seg.y1-5, seg.width, seg.height+10);
          const data = cropped.toBlob();
          void this.getText(data);
        }
      }
      this.canvas!.width = image.getWidth();
      this.canvas!.height = image.getHeight();
      image.draw(this.canvas);
    });
  }
}

// import { CommonModule } from '@angular/common';
// import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
// import { WebcamModule, WebcamImage } from 'ngx-webcam';
// import { ButtonModule } from 'primeng/button';
// import { Observable, Subject } from 'rxjs';
// import { createWorker } from 'tesseract.js';

// declare var cv: any;

// declare var Marvin: any;
// declare var MarvinImage: any;

// type Point = [number, number];

// @Component({
//   selector: 'app-card-camera',
//   standalone: true,
//   imports: [CommonModule, WebcamModule, ButtonModule],
//   templateUrl: './card-camera.component.html',
//   styleUrl: './card-camera.component.scss',
// })
// export class CardCameraComponent {
//   @ViewChild('screenshot', { static: false }) canvasRef!: ElementRef;
//   canvas: HTMLCanvasElement | null = null;
//   ctx: CanvasRenderingContext2D | null = null;

//   text: string[] = [];

//   private trigger: Subject<any> = new Subject();
//   public webcamImage!: WebcamImage;
//   private nextWebcam: Subject<any> = new Subject();
//   sysImage = '';

//   featuresCornersMap: number[][] = [];

//   width = 300;

//   cropWidth = 300;
//   clusterThreshold = 10;
//   clusterMinPoints = 3;

//   showCorners = false;
//   showClusterPoints = true;
//   showClusterRect = true;

//   templateSrc = '/assets/images/games/7-wonders/wood.png'

//   @HostListener('window.resize', ['$event'])
//   onResize() {
//     this.width = Math.min(300, window.innerWidth);
//   }

//   constructor() {
//     this.onResize();
//   }

//   public getSnapshot(): void {
//     this.trigger.next(void 0);
//   }

//   public captureImg(webcamImage: WebcamImage): void {
//     this.webcamImage = webcamImage;
//     this.sysImage = webcamImage!.imageAsDataUrl;
//     // this.drawMarvinImage();
//     // this.drawOpenCvImage(webcamImage!.imageData);
//     this.text = [];
//     this.drawMarvinJText();
//     // void this.getText(this.sysImage);
//     // console.info('got webcam image', this.sysImage);
//   }

//   public get invokeObservable(): Observable<any> {
//     return this.trigger.asObservable();
//   }

//   public get nextWebcamObservable(): Observable<any> {
//     return this.nextWebcam.asObservable();
//   }

//   async getText(blob: string) {
//     console.log('Getting Text: ', blob)
//     const worker = await createWorker('eng');
//     const ret = await worker.recognize(blob);
//     console.log('Result: ', ret.data.text);
//     this.text.push(ret.data.text);
//     await worker.terminate();
//   }

//   drawOpenCvImage(webImage: ImageData) {
//     // this.canvas = this.canvasRef.nativeElement;
//     // this.ctx = this.canvas?.getContext('2d') ?? null;
//     // if (this.ctx === null || this.canvas === null) {
//     //   return;
//     // }
//     console.log(webImage);
//     // this.canvas.width = webImage.width;
//     // this.canvas.height = webImage.height;
//     const templ = cv.imread('template');
//     const src = cv.matFromArray(webImage.height, webImage.width, cv.CV_8UC4, webImage.data);
//     cv.imshow('screenshot', src);

//     let dst = new cv.Mat();
//     let mask = new cv.Mat();
//     cv.matchTemplate(src, templ, dst, cv.TM_SQDIFF, mask);
//     let result = cv.minMaxLoc(dst, mask);
//     let maxPoint = result.minLoc;
//     let color = new cv.Scalar(255, 0, 0, 200);
//     let point = new cv.Point(maxPoint.x + templ.cols, maxPoint.y + templ.rows);
//     console.log(maxPoint);
//     cv.rectangle(src, maxPoint, point, color, 2, cv.LINE_8, 0);
//     cv.imshow('output', src);
//     src.delete();
//     dst.delete();
//     mask.delete();
//   }

//   drawMarvinJText() {
//     this.canvas = this.canvasRef.nativeElement;
//     this.ctx = this.canvas?.getContext('2d') ?? null;
//     if (this.ctx === null || this.canvas === null) {
//       return;
//     }
//     // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

//     let image = new MarvinImage();
//     image.load(this.sysImage, () => {
//       var segments = Marvin.findTextRegions(image, 15, 8, 30, 150);
//       for(var i in segments) {
//         var seg = segments[i];
//         if(seg.height >= 5){ 
//           image.drawRect(seg.x1, seg.y1-5, seg.width, seg.height+10, 0xFFFF0000); 
//           // image.drawRect(seg.x1+1, seg.y1-4, seg.width-2, seg.height+8, 0xFFFF0000); 

//           var cropped = new MarvinImage(1,1);
//           Marvin.crop(image, cropped, seg.x1+1, seg.y1-5, seg.width, seg.height+10);
//           const data = cropped.toBlob();
//           void this.getText(data);
//         }
//       }
//       this.canvas!.width = image.getWidth();
//       this.canvas!.height = image.getHeight();
//       image.draw(this.canvas);
//     });
//   }

//   drawMarvinImage() {
//     this.canvas = this.canvasRef.nativeElement;
//     this.ctx = this.canvas?.getContext('2d') ?? null;
//     if (this.ctx === null || this.canvas === null) {
//       return;
//     }
//     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

//     let imageAutoCrop = new MarvinImage();
//     imageAutoCrop.load(this.sysImage, () => {
//       var factor = imageAutoCrop.getWidth() / this.cropWidth;
//       var image = new MarvinImage(
//         this.cropWidth,
//         imageAutoCrop.getHeight() / factor
//       );
//       Marvin.scale(imageAutoCrop, image, this.cropWidth);
//       this.canvas!.width = image.getWidth();
//       this.canvas!.height = image.getHeight();
//       image.draw(this.canvas);
//       this.detectCorners(image);
//       this.clusterCorners(image);
//     });
//   }

//   detectCorners(image: typeof MarvinImage) {
//     var factor = image.getWidth() / this.cropWidth;
//     this.featuresCornersMap = Marvin.moravec(image.clone(), image, 5, 10000);

//     if (this.showCorners && this.ctx) {
//       for (var x = 0; x < this.featuresCornersMap.length; x++) {
//         for (var y = 0; y < this.featuresCornersMap.length; y++) {
//           if (this.featuresCornersMap[x][y] > 0) {
//             // scale up the corners coordinates
//             this.ctx.fillRect(
//               Math.floor(x * factor),
//               Math.floor(y * factor),
//               10,
//               10
//             );
//           }
//         }
//       }
//     }
//   }

//   clusterCorners(imageAutoCrop: typeof MarvinImage) {
//     const points: Point[] = [];
//     for (var x = 0; x < this.featuresCornersMap.length; x++) {
//       for (var y = 0; y < this.featuresCornersMap.length; y++) {
//         if (this.featuresCornersMap[x][y] > 0) {
//           points.push([x, y]);
//         }
//       }
//     }

//     const clusters = dbscan(
//       points,
//       this.clusterThreshold,
//       this.clusterMinPoints
//     );

//     var factor = imageAutoCrop.getWidth() / this.cropWidth;
//     clusters.forEach((cluster) => {
//       this.ctx!.fillStyle = this.getRandomColor();

//       const xValues = cluster.map((x) => x[0]);
//       const yValues = cluster.map((x) => x[1]);
//       let minX = Math.min(...xValues);
//       let maxX = Math.max(...xValues);
//       let minY = Math.min(...yValues);
//       let maxY = Math.max(...yValues);

//       this.ctx!.fillRect(
//         Math.floor(minX * factor),
//         Math.floor(minY * factor),
//         Math.floor((maxX - minX) * factor),
//         Math.floor((maxY - minY) * factor)
//       );

//       cluster.forEach((point) => {
//         this.ctx!.fillRect(
//           Math.floor(point[0] * factor),
//           Math.floor(point[1] * factor),
//           10,
//           10
//         );
//       });
//     });
//   }

//   getRandomColor(): string {
//     return `rgba(${Math.random() * 255},${Math.random() * 255},${
//       Math.random() * 255
//     },0.6)`;
//   }

//   adjustClusterThreshold(value: number) {
//     this.clusterThreshold += value;
//     this.drawMarvinImage();
//   }
// }

// const euclideanDistance = (point1: Point, point2: Point): number => {
//   const [x1, y1] = point1;
//   const [x2, y2] = point2;
//   return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
// };

// const dbscan = (
//   points: Point[],
//   threshold: number,
//   minPoints: number
// ): Point[][] => {
//   const clusters: Point[][] = [];
//   const visited = new Set<number>();
//   const noise = new Set<number>();

//   const getNeighbors = (pointIndex: number): number[] => {
//     const neighbors: number[] = [];
//     for (let i = 0; i < points.length; i++) {
//       if (euclideanDistance(points[pointIndex], points[i]) <= threshold) {
//         neighbors.push(i);
//       }
//     }
//     return neighbors;
//   };

//   const expandCluster = (
//     pointIndex: number,
//     neighbors: number[],
//     cluster: Point[]
//   ): void => {
//     cluster.push(points[pointIndex]);
//     visited.add(pointIndex);

//     let i = 0;
//     while (i < neighbors.length) {
//       const neighborIndex = neighbors[i];

//       if (!visited.has(neighborIndex)) {
//         visited.add(neighborIndex);
//         const newNeighbors = getNeighbors(neighborIndex);
//         if (newNeighbors.length >= minPoints) {
//           neighbors.push(...newNeighbors);
//         }
//       }

//       if (
//         !clusters.some((cluster) => cluster.includes(points[neighborIndex]))
//       ) {
//         cluster.push(points[neighborIndex]);
//       }

//       i++;
//     }
//   };

//   for (let i = 0; i < points.length; i++) {
//     if (visited.has(i)) continue;

//     const neighbors = getNeighbors(i);
//     if (neighbors.length < minPoints) {
//       noise.add(i);
//     } else {
//       const newCluster: Point[] = [];
//       expandCluster(i, neighbors, newCluster);
//       clusters.push(newCluster);
//     }
//   }

//   return clusters;
// };
