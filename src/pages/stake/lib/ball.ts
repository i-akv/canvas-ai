import { Circle } from "@/lib/shape/circle";

export class Ball extends Circle {
    constructor(radius: number = 10){
        super(0, 0, radius);
    }

    
}