import { Circle } from "./circle";
import { Vec2 } from "../math";
import Obj from "../obj";
import { Line } from "./line";

export class Road extends Obj {
  isDrawPoint: boolean = true;
  width: number = 50;
  pointRadius: number = 20;
  points: Vec2[] = [];
  constructor(points: Vec2[] = []) {
    super();
    this.points = points;
    this.isKinematic = false;
  }

  addPoint(p: Vec2) {
    this.points.push(p);
  }

  draw(ctx: CanvasRenderingContext2D) {
    for (let i = 0; i < this.points.length; i++) {
      const p = this.points[i];

      if (i != this.points.length - 1) {
        const line = new Line(p, this.points[i + 1]);
        line.width = this.width;
        line.color = "green";
        line.draw(ctx);
      }
    }
    if (!this.isDrawPoint) return;
    for (let p of this.points) {
      const point = new Circle(p.x, p.y, this.pointRadius);
      point.draw(ctx);
    }
  }
}
