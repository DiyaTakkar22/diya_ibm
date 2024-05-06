package com.ibm.day2;

//Concrete class representing a rectangle, inheriting from Shape
class Rectangle extends Shape {
 double length;
 double width;

 public Rectangle(double length, double width) {
     this.length = length;
     this.width = width;
 }

 @Override
 double area() {
     return length * width;
 }
 
 // Method overloading: calculate area with optional parameter
 double area(boolean isPerimeterNeeded) {
     if (isPerimeterNeeded) {
         return 2 * (length + width);
     } else {
         return area(); // call to base area method
     }
 }
}
