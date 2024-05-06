package com.ibm.day2;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

// Concrete class representing a circle, inheriting from Shape
class Circle extends Shape {
    double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

// Class demonstrating multithreading using ExecutorService
public class ShapeExecutor {
    // Static method to compute total area of shapes using ExecutorService
    public static double totalArea(Shape[] shapes) {
        ExecutorService executor = Executors.newFixedThreadPool(shapes.length);
        double totalArea = 0.0;
        for (Shape shape : shapes) {
            executor.submit(() -> {
                totalArea += shape.area(); // Polymorphism: calling area method on different shapes
            });
        }
        executor.shutdown();
        return totalArea;
    }

    public static void main(String[] args) {
        // Creating an array of Shape objects
        Shape[] shapes = {new Rectangle(5, 4), new Circle(3), new Rectangle(6, 3)};

        // Calling static method totalArea to compute total area of shapes
        double total = totalArea(shapes);
        System.out.println("Total area of shapes: " + total);
        
        // Method overloading demonstration
        Rectangle rect = new Rectangle(5, 4);
        double areaWithoutPerimeter = rect.area(false);
        double areaWithPerimeter = rect.area(true);
        System.out.println("Area of rectangle without perimeter: " + areaWithoutPerimeter);
        System.out.println("Area of rectangle with perimeter: " + areaWithPerimeter);
    }
}
