import express from "express";
import colors from "colors";

const app = express();

const slides = [
  {
    id: 0,
    brief:
      "On-shore, offshore, nearshore and hybrid models for dedicated development, product building and staff augmentation.",
    order: 1,
    title: "Global IT Experts",
    imgUrl: "",
    itemUrl: "",
    category: "Outsource",
    videoUrl: "",
    colorCode: "FF7C16",
  },
  {
    id: 1,
    brief:
      "Link Development, the global technology solutions provider and an A15 company, unveiled today that it has recently marked its Silver Jubilee anniversary.",
    order: 3,
    title: "25 Years of Business Growth",
    imgUrl: "",
    itemUrl: "",
    category: "Marking",
    videoUrl: "",
    colorCode: "F215B6",
  },
  {
    id: 2,
    brief:
      "Link Development,Our people, processes, and technologies thrive on digital breakthroughs.",
    order: 2,
    title: "Crafty Minds Reshaping Future",
    imgUrl: "",
    itemUrl: "",
    category: "Trendy Inside-Out",
    videoUrl: "",
    colorCode: "A6E51C",
  },
];

app.get("/sliders", (req, res) => {
  res.send(slides);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
