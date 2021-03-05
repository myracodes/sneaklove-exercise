

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sneak_love", {
  useNewUrlParser: true,
  useCreateIndex: true,
  // useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => console.log("yay mongodb connected :)"));

mongoose.connection.on("error", () => console.log("nay db error sorry :("));


//`${process.env.MONGO_URI}`

// "mongodb://localhost/sneak_love";