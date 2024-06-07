import Canvas, { onReadyProps } from "@/components/Canvas";
import Obj from "@/lib/obj";
import { Circle } from "@/lib/shape/circle";
import { Line } from "@/lib/shape/line";

let base: Obj;
let bob: Obj;
const pendulum_length = 100;

const onCanvasReady = ({ engine }: onReadyProps) => {
  base = new Circle(0, 0, 10);
  base.color = "black";
  engine.add(base);

  bob = new Circle(0, pendulum_length, 10);
  engine.add(bob);

  const joint = new Line(base.position, bob.position);
  engine.add(joint);

  document.addEventListener("keydown", (ev: KeyboardEvent) => {
    switch (ev.key) {
      case "ArrowLeft":
        base.position.x -= 1;
        break;
      case "ArrowRight":
        base.position.x += 1;
        break;
    }
  });
};

const onCanvasRender = () => {
  const dis = base.position.distance(bob.position);
  if (dis > pendulum_length) {
    bob.position.x -= 1;
    bob.position.y -= 1;
  }

  bob.position.y += (0.5 * 10) / 60;
};

const OnePendulum = () => {
  return (
    <main>
      <Canvas onReady={onCanvasReady} onRender={onCanvasRender} />
    </main>
  );
};

export default OnePendulum;
