const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://p4prashant786:QIgJKZWrsQRHSzVc@cluster0.giegsgo.mongodb.net/Swibby?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connectDB;
