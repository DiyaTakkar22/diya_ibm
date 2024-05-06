package com.ibm.demo;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;

import java.util.function.Consumer;

import org.bson.Document;
import org.bson.conversions.Bson;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Projections;
import com.mongodb.client.model.Sorts;

public class MongoDbDemo {
     public static void main(String[] args) {
    	 String url="mongodb://localhost:27017";
    	 //connect to mongo db
    	 MongoClient client=MongoClients.create(url);
         //get access to database
         MongoDatabase database=client.getDatabase("ibm");
    	 MongoCollection<Document> collection=database.getCollection("restaurants");
    	 
    	 long docCount=collection.countDocuments();
    	 System.out.println(docCount);
    	 // Query all documents in the collection
         FindIterable<Document> documents = collection.find();

         // Print all documents
         for (Document doc : documents) {
        	 System.out.println(doc.toJson());
      	 System.out.println("End");
    	
     }    
         Document firstDocument = collection.find().first();
         System.out.println("First Document: " + firstDocument.toJson());
         
         documents.forEach((Consumer<Document>) doc -> {
        	    // Process the document
        	    System.out.println(doc.toJson());
        	});
         
         
       // allows iterating over the documents.
         MongoCursor<Document> iterator = documents.iterator();
         while (iterator.hasNext()) {
             Document doc = iterator.next();
             // Process the document
             System.out.println(doc.toJson());
         }
         
      // Include only specific fields in the result
         Bson projection = Projections.include("restauarant_id", "borough");
         FindIterable<Document> documents2 = collection.find().projection(projection);
      // Print documents with included fields
         documents2.forEach((Consumer<Document>) doc -> {
             System.out.println(doc.toJson());
         });
         
         // Exclude specific fields from the result
         Bson projection2 = Projections.exclude("name", "cuisine");
         FindIterable<Document> documents3 = collection.find().projection(projection2);
         // Print documents with included fields
         documents3.forEach((Consumer<Document>) doc -> {
             System.out.println(doc.toJson());
         });
         
      // Sorting documents based on a field in ascending order
         Bson sort = Sorts.ascending("restaurant_id");
         FindIterable<Document> documents4 = collection.find().sort(sort);
         documents4.forEach((Consumer<Document>) doc -> {
        	 System.out.println(doc.toJson());
         });

         // Sorting documents based on a field in descending order
         Bson sort2 = Sorts.descending("restaurant_id");
         FindIterable<Document> documents5 = collection.find().sort(sort);
         documents5.forEach((Consumer<Document>) doc -> {
        	 System.out.println(doc.toJson());
         });
         
         FindIterable<Document> documents6 = collection.find().limit(10);
         FindIterable<Document> documents7 = collection.find().skip(5);





}
}
