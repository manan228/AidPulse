import express from "express";
import mongoose from "mongoose";
import config from "./config/config.js";
import victimRoutes from "./routes/victim.js";

const app = express();

app.use(express.json())
app.use("/api", victimRoutes);

app.get("/test", (req, res) => {
console.log("test");
})
async function dbConnect() {
  await mongoose.connect(config.MONGO_URL);
  console.log(`mongoose DB connected`);
}

dbConnect();

app.listen(config.port, () =>
  console.log(`Server running in ${config.env} mode on port ${config.port}`)
);
