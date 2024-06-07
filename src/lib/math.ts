export class Vec2 {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  set(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(vec: Vec2) {
    this.x += vec.x;
    this.y += vec.y;
  }

  subtract(vec: Vec2) {
    this.x -= vec.x;
    this.y -= vec.y;
  }

  scale(scaler: number) {
    this.x *= scaler;
    this.y *= scaler;
  }

  length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  distance(vec: Vec2) {
    return Math.sqrt(Math.pow(this.x - vec.x, 2) + Math.pow(this.y - vec.y, 2));
  }

  draw(ctx: CanvasRenderingContext2D, radius: number = 5) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}

export class Color3 {
  r: number;
  g: number;
  b: number;
  constructor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  static randomColorWOpacity(opacity = "ff") {
    return Color3.randomHexHash() + opacity
  }

  static randomHexHash() {
    const ls = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    return (
      "#" +
      ls[Math.floor(Math.random() * 16)] +
      ls[Math.floor(Math.random() * 16)] +
      ls[Math.floor(Math.random() * 16)] +
      ls[Math.floor(Math.random() * 16)] +
      ls[Math.floor(Math.random() * 16)] +
      ls[Math.floor(Math.random() * 16)]
    );
  }

  static random() {
    return new Color3(
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255)
    );
  }

  static randomHex(): string {
    return "#" + (Math.random() * 0xffffff).toString();
  }
}

export function distance(p1: Vec2, p2: Vec2) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}
