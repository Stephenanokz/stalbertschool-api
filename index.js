const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const aboutRoutes = require("./routes/about");
const achievementRoutes = require("./routes/achievements");
const carouselImageRoutes = require("./routes/carouselImages");
const contactMailRoutes = require("./routes/contactMails");
const galleryImageRoutes = require("./routes/galleryImages");
const personnelRoutes = require("./routes/personnels");
const postRoutes = require("./routes/posts");

dotenv.config();

const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("~DB Connection Successful~");
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.set("strictQuery", false);

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/achievements", achievementRoutes);
app.use("/api/carouselimages", carouselImageRoutes);
app.use("/api/contactmails", contactMailRoutes);
app.use("/api/galleryimages", galleryImageRoutes);
app.use("/api/personnels", personnelRoutes);
app.use("/api/posts", postRoutes);

app.use("/", (req, res)=>{
  res.send("Api in service")
})

app.listen(port, () => {
  console.log(`****Backend Server Running on port ${port}****`);
});
