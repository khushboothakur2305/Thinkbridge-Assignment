const express = require(`express`);
const app = express();

const UserRoutes = require("./routes/user.route");
////Routes Import
const BooksAdmin = require(`./Routes/Books.route`);
require("./db/db");
const cors = require("cors");
app.use(express.json());
app.use("/books", BooksAdmin);
app.use(UserRoutes);
app.use(cors());
app.listen(3000, () => {
  console.log("application served");
});
