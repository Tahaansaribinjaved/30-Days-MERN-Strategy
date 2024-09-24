// Update the age of John Doe
db.users.updateOne({ name: "John Doe" }, { $set: { age: 29 } });
