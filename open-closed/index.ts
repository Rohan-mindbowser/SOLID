class Database {
  saveToMongoDb() {
    console.log("Saving data in MongoDb...");
    console.log("successfully saved in MongoDb");
  }
  saveToMysql() {
    console.log("Saving data in Mysql...");
    console.log("successfully saved in Mysql");
  }
}

const db = new Database();
db.saveToMongoDb();
