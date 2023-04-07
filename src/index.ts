import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send({
      message: "Hello, World! Soy Yonacet Seijas c.i 31441287 seccion 3",
    });
})

app.get("/random", (req, res) => {
    res.send({
      number: Math.floor(Math.random() * 100),
    });
});

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});