class DataController {
  constructor(private dataService: DataService) {}
  save() {
    this.dataService.save();
  }
}

class DataService {
  constructor(private postgress: PostgressDb) {}
  save() {
    this.postgress.save();
  }
}

class PostgressDb {
  save() {
    console.log("Save in postgres db");
  }
}
const ps = new PostgressDb();
const ds = new DataService(ps);
const dc = new DataController(ds);

dc.save();
