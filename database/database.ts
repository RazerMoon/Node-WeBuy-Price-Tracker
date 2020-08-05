import * as Mongoose from "mongoose";
let database: Mongoose.Connection;

export async function connect() {
  const uri =
    "mongodb+srv://node:node@tracker.mcg3u.mongodb.net/Tracker?retryWrites=true&w=majority";

  if (database) {
    return;
  }

  await Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  database = Mongoose.connection;

  database.once("open", async () => {
    console.log("Connected to database");
  });

  database.on("error", () => {
    console.log("Error connecting to database");
  });
}

export async function disconnect() {
  if (!database) {
    return;
  }
  await Mongoose.disconnect();
}
