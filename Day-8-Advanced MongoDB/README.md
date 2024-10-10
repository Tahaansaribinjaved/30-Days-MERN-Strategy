### Week 2: Advanced MERN Concepts
#### Day 8: Advanced MongoDB
---

### **Topics Covered**

- **Aggregation**: A powerful framework in MongoDB that allows you to process data records and return computed results. It is often used for operations like filtering, sorting, grouping, reshaping, and aggregating data.
- **Indexing**: Enhances query performance by creating indexes on collections. MongoDB supports various index types such as single field, compound, multi-key, text, and geospatial indexes.
- **Data Modeling**: Structuring your documents for optimal read/write operations. Effective modeling considers relationships (embedding vs referencing), data duplication, and efficient querying.

### **Tasks**
1. **Optimize Queries Using Indexes**:
   - Learn how to create and apply indexes for speeding up query performance.
   - Explore different types of indexes (single field, compound).
   - Analyze query performance using `explain()`.

2. **Perform Aggregation Operations**:
   - Understand the aggregation pipeline stages such as `$match`, `$group`, `$sort`, `$limit`, `$project`, and `$lookup`.
   - Practice performing complex aggregations like calculating averages, summing fields, and looking up data from multiple collections.

### **Project**
- **MongoDB Advanced Repo**:
   - Push scripts to a GitHub repository demonstrating the use of advanced MongoDB queries.
   - Include scripts that perform:
     - Aggregation operations (e.g., summing totals, grouping by categories).
     - Query optimization using indexes.

---

## Example Notes for Day 8

### **Aggregation Framework**
- **Aggregation Pipeline**: A sequence of stages that process documents:
  - **`$match`**: Filters documents to match certain criteria.
  - **`$group`**: Groups documents by a specific field and can perform operations like `sum`, `avg`, `count`.
  - **`$sort`**: Orders documents in ascending or descending order.
  - **`$project`**: Reshapes documents by including or excluding fields.
  - **`$lookup`**: Joins data from other collections.
  
#### **Example**: 
```js
db.orders.aggregate([
  { $match: { status: "complete" } },
  { $group: { _id: "$customerId", totalSpent: { $sum: "$amount" } } },
  { $sort: { totalSpent: -1 } }
]);
```

### **Indexing**
- **What are Indexes?** Indexes improve the speed of query operations. Without an index, MongoDB performs a collection scan.
- **Creating an Index**: 
  ```js
  db.orders.createIndex({ customerId: 1 });
  ```
- **Checking Query Efficiency**: 
  Use the `explain()` method to view how MongoDB executes a query.
  ```js
  db.orders.find({ customerId: "12345" }).explain();
  ```

### **Data Modeling**
- **Embedding**: Storing related data together within the same document.
- **Referencing**: Storing references to documents in different collections.
- **Trade-offs**: Embedding leads to faster reads but larger document sizes; referencing offers flexibility at the cost of more queries.

---

## **README.md for Advanced MongoDB**

```markdown
# MongoDB Advanced Queries 🚀

## Overview
This repository demonstrates advanced MongoDB concepts like **Aggregation**, **Indexing**, and **Data Modeling**. The scripts in this project showcase how to perform optimized queries and manipulate complex data structures.

---

## Features
1. **Aggregation Framework**:
   - Efficient data processing using stages such as `$match`, `$group`, `$sort`, and `$lookup`.
   - Example: Summing the total amount spent by each customer in an e-commerce application.

2. **Indexing**:
   - Enhances query performance by creating indexes on collections.
   - Example: Creating an index on `customerId` to optimize frequent queries.

3. **Data Modeling**:
   - Effective strategies for structuring data.
   - Examples of embedding vs referencing.

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mongodb-advanced.git
   ```
2. Navigate to the project directory:
   ```bash
   cd mongodb-advanced
   ```
3. Install MongoDB if it's not installed. [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/).

4. Run the MongoDB server and import sample data:
   ```bash
   mongod --dbpath /path-to-your-db
   mongoimport --db mydb --collection orders --file orders.json
   ```

---

## Example Usage

### Aggregation Example:
```js
db.orders.aggregate([
  { $match: { status: "complete" } },
  { $group: { _id: "$customerId", totalSpent: { $sum: "$amount" } } },
  { $sort: { totalSpent: -1 } }
]);
```

### Indexing Example:
```js
db.orders.createIndex({ customerId: 1 });
```

---

## Author

- [Taha Ansari](https://github.com/Tahaansaribinjaved)

Feel free to contribute or raise issues if you find any improvements!

---
