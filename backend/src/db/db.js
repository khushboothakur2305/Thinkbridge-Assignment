const mongoose = require(`mongoose`);
mongoose
  .connect(
    `mongodb+srv://khushboo2305:khushboo2305@cluster0.zlg0j.mongodb.net/BooksAdmin?retryWrites=true&w=majority`
  )
  .then((connected) => {
    console.log("DB connected");
  });
