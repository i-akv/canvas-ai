import Obj from "../obj";

export class Circle extends Obj {
  radius: number;
  constructor(x: number, y: number, radius: number) {
    super();
    this.position.set(x, y);
    this.radius = radius;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;

    ctx.fill();

    ctx.strokeStyle = this.color.slice(0, -2)
    ctx.stroke()

    ctx.closePath();
  }
}
