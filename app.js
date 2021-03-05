const express = require("express");
const path = require("path");

const PORT = 3000;
const app = express();

//root folder for the app is public
app.use(express.static(path.join(__dirname, "public")));
// const middleware1 = (req, res, next) => {
//   //has access to req,res also next

//   console.log("Response from the middleware1");
//   next(); //go to next middleware
// };

// const middleware2 = (req, res, next) => {
//   //has access to req,res also next

//   console.log("Response from the middleware2");
//   //   next(); //go to next middleware
// };

// // app.use("/", [middleware1, middleware2]);
// app.use([middleware1, middleware2]);
app.get("/contact", (req, res, next) => {
  //also every route is a middleware and has acess to next
  //   res.sendFile(path.join(__dirname, "public", "index.html"));
  res.status(200).send();
});

app.get("/about", (req, res, next) => {
  //also every route is a middleware and has acess to next
  res.status(200).send("About Route");
});

app.listen(PORT, () => {
  console.log(`Listeninig on Port http://localhost:${PORT}`);
});
