import { Vec2 } from "../math";
import Obj from "../obj";

export class Rectangle extends Obj {
  width: number;
  height: number;

  constructor(center: Vec2, dimensions: Vec2) {
    super();
    this.position = center;
    this.width = dimensions.x;
    this.height = dimensions.y;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.rect(
      this.position.x - this.width / 2,
      this.position.y - this.height / 2,
      this.width,
      this.height
    );
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}
