package com.ibm.day2;


// Abstract class representing a shape
abstract class Shape {
    abstract double area(); // Abstract method to calculate area
}

// Concrete class representing a rectangle, inheriting from Shape
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



