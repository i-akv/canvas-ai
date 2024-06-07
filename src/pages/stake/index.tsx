import Canvas, { onReadyProps } from "@/components/Canvas";
import { Ball } from "./lib/ball";

const rows = 10;
const rows_gap = 40;
const column_gap = 30;
const ball_radius = 3;

// let ball: Ball;
const onReady = ({ engine }: onReadyProps) => {
  //   engine.ctx.translate(0, 0);
  for (let i = 0; i < rows; i++) {
    for (let j = -i; j <= i; j++) {
      const ball = new Ball(ball_radius);
      ball.isKinematic = false;
      ball.position.set(j * column_gap, i * rows_gap);
      engine.add(ball);
    }
  }
  engine.ctx.translate(0, -engine.canvasHeight / 6);

  let b = new Ball();
  b.color = "green";
  b.position.set(0, -50);
  engine.add(b);

  for (let i = -rows; i <= rows; i++) {
    const c = new Ball();
    c.color = "#1f344d";
    c.position.set(i * column_gap, rows * rows_gap);
    engine.add(c);
  }
};

const onRender = () => {
  // ball.radius = dt*.01
};

const Stake = () => {
  return (
    <main>
      <Canvas onReady={onReady} onRender={onRender} />
    </main>
  );
};

export default Stake;
