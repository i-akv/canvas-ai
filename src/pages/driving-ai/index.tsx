import Canvas, { onReadyProps, onRenderProps } from "@/components/Canvas";
import { Vec2 } from "@/lib/math";
import { Circle } from "@/lib/shape/circle";
import { Line } from "@/lib/shape/line";
import { Road } from "@/lib/shape/road";

let circle: Circle;
let line: Line;
const onReady = ({ engine }: onReadyProps) => {
  const points = [
    // new Vec2(0, 0),
    new Vec2(-200, -200),
    new Vec2(0, 0),
    new Vec2(-50, 250),
  ];

  const road = new Road(points);
  road.width = 70;
  road.pointRadius = 10;
  engine.add(road);

  engine.canvas.addEventListener("click", (ev) => {
    const rp = engine.relativePoint(new Vec2(ev.clientX, ev.clientY));
    road.addPoint(rp);
  });
};

const onRender = ({ dt }: onRenderProps) => {
  const x = 200 * Math.cos(dt * 0.001);
  const y = 200 * Math.sin(dt * 0.001);
  circle.position.set(x, y);
  line.endPoint.set(x, y);
};

const DrivingAI = () => {
  return (
    <main>
      <Canvas onReady={onReady} onRender={onRender} />
    </main>
  );
};

export default DrivingAI;
