const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

module.exports.db = {
  connect: async (uri) => {
    const connection = await mongoose.connect(uri, options);
    if (!connection) {
      throw new Error("We're having troubles connecting to your mongodb campus or altas.");
    }
    console.log("Successfully connected to Mongodb campus or altas :)");
  },
  disconnect: async () => {
    await mongoose.disconnect();
  },
};
