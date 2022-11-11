const mongoose = require("mongoose");

// step 1 :- connect to mongodb
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://maddy:121001@userdata.hvn5g5l.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = connect;
