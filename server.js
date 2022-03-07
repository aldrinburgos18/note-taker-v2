const apiRoutes = require("./routes/apiRoutes");

const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());

app.use("/api", apiRoutes);

app.listen(3001, () => {
  console.log(`Server is now live on port ${PORT}!`);
});
