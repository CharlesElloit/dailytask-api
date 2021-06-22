const { connect } = require("mongoose");

const DBconnection = async (url) => {
  try {
    const conn = await connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    if (conn) {
      console.log("Successfully Connected to MongoDB Atlas");
    }
  } catch (error) {
    console.log(`MongoDB connection error: ${error}`);
  }
};

module.exports = DBconnection;
