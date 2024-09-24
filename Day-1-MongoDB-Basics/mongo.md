# MongoDB Basics

## Introduction to NoSQL Databases
- NoSQL databases are non-relational and designed for large-scale data storage.
- Types: Document, Key-Value, Column-family, Graph databases.
- Key features: Flexibility, scalability, high performance, distributed architecture.
- Use cases: Big data, real-time applications, IoT, social networks.

## MongoDB Overview
- MongoDB is a document-oriented NoSQL database storing data in BSON format.
- Features:
  - Document-oriented storage.
  - Horizontal scaling via sharding.
  - Flexible schema and high availability through replication.
  - Advanced querying, indexing, and aggregation.

## MongoDB CRUD Operations
- **Create**: `db.collection.insertOne()`
- **Read**: `db.collection.find()`
- **Update**: `db.collection.updateOne()`
- **Delete**: `db.collection.deleteOne()`

## Example:
```js
// Create a new user
db.users.insertOne({ name: "John Doe", age: 25, email: "john@example.com" });

// Read all users above age 18
db.users.find({ age: { $gte: 18 } });

// Update a user's age
db.users.updateOne({ name: "John Doe" }, { $set: { age: 26 } });

// Delete a user
db.users.deleteOne({ name: "John Doe" });
