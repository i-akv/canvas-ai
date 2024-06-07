import { Vec2 } from "./math";
import { v1 } from "uuid";

export default class Obj {
  id = v1();
  position = new Vec2(0, 0);
  velocity = new Vec2(0, 0);
  acceleration = new Vec2(0, 0);
  isKinematic = true;
  angle: number = 0;

  color: string = "red";

  constructor() {}

  _draw(ctx: CanvasRenderingContext2D) {
    if (!this.angle) {
      // 0
      this.draw(ctx);
      return;
    }

    ctx.save();
    // ctx.translate(this.position.x, this.position.y)
    ctx.rotate(this.angle);
    this.draw(ctx);
    ctx.restore();
  }

  // @ts-ignore
  draw(ctx: CanvasRenderingContext2D) {
    console.warn(
      "Method not Provided Warning: Using Default Draw Method of Obj Class."
    );
  }

  update() {
    if (!this.isKinematic) return;
    this.velocity.add(this.acceleration);
    this.position.x += this.velocity.x;
    this.position.y -= this.velocity.y; // y axis is inverted
  }
}
