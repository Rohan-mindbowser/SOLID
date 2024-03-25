interface ISave {
  save(): void;
}

class DataController {
  constructor(private dataService: DataService) {}
  save() {
    this.dataService.save();
  }
}

class DataService {
  constructor(private db: ISave) {}
  save() {
    this.db.save();
  }
}

class PostgressDb implements ISave {
  save() {
    console.log("Save in postgres db");
  }
}

class MongoDb implements ISave {
  save() {
    console.log("Save in MongoDb db");
  }
}

const ps = new PostgressDb();
const mg = new MongoDb();
const ds = new DataService(mg);
const dc = new DataController(ds);

dc.save();
