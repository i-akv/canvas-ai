import { Engine } from "@/lib/engine";
import { useEffect, useRef } from "react";

export interface onReadyProps {
  engine: Engine;
}

export interface onRenderProps extends onReadyProps {
  dt: number;
}

type Props = {
  onReady: ({ engine }: onReadyProps) => void;
  onRender: ({ dt, engine }: onRenderProps) => void;
};

const Canvas = ({ onReady, onRender }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const { current: canvas } = canvasRef;

    const engine = new Engine(canvas!, {});

    onReady({ engine });

    animate();

    function animate(dt = 0) {
      requestAnimationFrame(animate);
      engine.render();
      if (onRender) onRender({ dt, engine });
    }
  }, [onReady, onRender]);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
