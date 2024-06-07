import Canvas, { onReadyProps, onRenderProps } from "@/components/Canvas";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Engine } from "@/lib/engine";
import { Color3 } from "@/lib/math";
import { Circle } from "@/lib/shape/circle";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Slider } from "@/components/ui/slider";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";

let _engine: Engine;
let RADIUS_OF_BALL = 10;
let NO_OF_BALLS = 10;
const BALLS: Circle[] = [];

const spawnRandomBall = (engine: Engine) => {
  const ball = new Circle(
    Math.random() * engine.canvasWidth - engine.canvasWidth / 2,
    Math.random() * engine.canvasHeight - engine.canvasHeight / 2,
    RADIUS_OF_BALL
  );

  ball.color = Color3.randomColorWOpacity("11");

  ball.velocity.x = Math.random() * 10 - 5;
  // ball.velocity.y = Math.random() * 20 - 5;
  engine.add(ball);
  BALLS.push(ball);
};

const onReady = ({ engine }: onReadyProps) => {
  _engine = engine;
  engine.gravity.y = -0.1;
  for (let i = 0; i < NO_OF_BALLS; i++) {
    spawnRandomBall(engine);
  }
};

const onRender = ({ engine }: onRenderProps) => {
  if (BALLS.length < NO_OF_BALLS) {
    for (let i = 0; i < NO_OF_BALLS - BALLS.length; i++) {
      spawnRandomBall(engine);
    }
  }

  if (BALLS.length > NO_OF_BALLS) {
    for (let i = 0; i < BALLS.length - NO_OF_BALLS; i++) {
      const ball = BALLS.shift();
      if (ball) engine.remove(ball);
    }
  }

  for (let ball of BALLS) {
    ball.radius = RADIUS_OF_BALL;

    if (Math.abs(ball.position.x) + ball.radius > engine.canvasWidth / 2) {
      if (Math.sign(ball.position.x) === -1) {
        ball.position.x = -engine.canvasWidth / 2 + ball.radius;
      } else {
        ball.position.x = engine.canvasWidth / 2 - ball.radius;
      }
      ball.velocity.x *= -1;
    }
    if (Math.abs(ball.position.y) + ball.radius > engine.canvasHeight / 2) {
      if (Math.sign(ball.position.y) === -1) {
        ball.position.y = -engine.canvasHeight / 2 + ball.radius;
      } else {
        ball.position.y = engine.canvasHeight / 2 - ball.radius;
      }
      ball.velocity.y *= -1;
    }
  }
};

const BouncingBalls = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    screen.orientation.onchange = (e) => {
      console.log(e);
    };

    return () => {};
  }, []);

  return (
    <main>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="absolute top-4 right-4" variant="outline">
            <MenuIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[300px] md:w-[426px] rounded-lg">
          <DialogHeader>
            <DialogTitle>Configure Ball Properties</DialogTitle>
            <DialogDescription>
              Make changes here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">No. of Balls</Label>
                <Slider
                  id="width"
                  min={1}
                  max={1000}
                  defaultValue={[NO_OF_BALLS]}
                  className="col-span-2 h-8"
                  onValueChange={(e) => {
                    NO_OF_BALLS = e[0];
                  }}
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Ball Radius</Label>
                <Slider
                  id="width"
                  min={1}
                  max={100}
                  defaultValue={[RADIUS_OF_BALL]}
                  className="col-span-2 h-8"
                  onValueChange={(e) => {
                    RADIUS_OF_BALL = e[0];
                  }}
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Gravity X</Label>
                <Slider
                  id="width"
                  min={-0.2}
                  max={0.2}
                  step={0.05}
                  defaultValue={[0]}
                  className="col-span-2 h-8"
                  onValueChange={(e) => {
                    _engine.gravity.x = e[0];
                  }}
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Gravity Y</Label>
                <Slider
                  id="width"
                  min={-0.2}
                  max={0.2}
                  step={0.05}
                  defaultValue={[-0.1]}
                  className="col-span-2 h-8"
                  onValueChange={(e) => {
                    _engine.gravity.y = e[0];
                  }}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)} type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Canvas onReady={onReady} onRender={onRender} />
    </main>
  );
};

export default BouncingBalls;
