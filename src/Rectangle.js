
import Shape from "./Shape";
export default class Rectangle extends Shape{
  
    constructor(color,height, width){
      super()
      this.height = height;
      this.width = width;
    }
  
    calculateArea(){
      return .5* this.height*this.width;
    }
    draw(){
      console.log(" I am drawing of new Rectangle...")
    }
  }

 // export default Rectangle;
  