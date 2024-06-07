import { Vec2 } from "./math";
import Obj from "./obj";

type EngineProps = {
  width?: number;
  height?: number;
};

export class Engine {
  canvas: HTMLCanvasElement;
  objs: Obj[] = [];
  ctx: CanvasRenderingContext2D;
  topLeft: Vec2;
  bottomRight: Vec2;
  canvasWidth: number;
  canvasHeight: number;
  gravity = new Vec2(0, 0);

  constructor(canvas: HTMLCanvasElement, { width, height }: EngineProps) {
    this.canvas = canvas;
    this.canvas.width = this.canvasWidth = width || window.innerWidth;
    this.canvas.height = this.canvasHeight = height || window.innerHeight;
    this.ctx = canvas.getContext("2d")!;

    this.topLeft = new Vec2(-this.canvas.width / 2, -this.canvas.height / 2);
    this.bottomRight = new Vec2(this.canvas.width / 2, this.canvas.height / 2);

    this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
  }

  add(obj: Obj) {
    obj.acceleration = this.gravity;
    this.objs.push(obj);
  }

  relativePoint(p: Vec2): Vec2 {
    return new Vec2(p.x - this.canvasWidth / 2, p.y - this.canvasHeight / 2);
  }

  remove(obj: Obj) {
    this.objs = this.objs.filter(o=>o.id!==obj.id)
  }

  render() {
    this.ctx.clearRect(
      this.topLeft.x,
      this.topLeft.y,
      this.canvasWidth,
      this.canvasHeight
    );
    for (const obj of this.objs) {
      obj.update();
      obj._draw(this.ctx);
    }
  }
}
