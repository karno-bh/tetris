export class Game {

  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  draw(): void {
    this.ctx.fillStyle = 'darkblue';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(10, 10, 150, 100);
  }
}
