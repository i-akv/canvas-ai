import { Vec2 } from "../math";
import Obj from "../obj";

export class Line extends Obj {
  startPoint: Vec2;
  endPoint: Vec2;
  width: number = 1;

  constructor(startPoint: Vec2, endPoint: Vec2) {
    super();
    this.startPoint = this.position = startPoint;
    this.endPoint = endPoint;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(this.startPoint.x, this.startPoint.y);
    ctx.lineTo(this.endPoint.x, this.endPoint.y);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.width
    // ctx.lineCap = "round"
    ctx.stroke();
    ctx.closePath();
  }
}
