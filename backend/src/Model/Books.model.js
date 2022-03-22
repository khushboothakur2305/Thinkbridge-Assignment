const mongoose = require(`mongoose`);

const BooksSchema = new mongoose.Schema({
  book_name: {
    type: String,
    required: true,
  },
  books_decription: {
    type: String,
    required: true,
  },
  marked_price: {
    type: Number,
    required: true,
  },
  selling_price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  editor: {
    type: String,
    required: true,
  },
});
const BookModel = new mongoose.model("Books", BooksSchema);
module.exports = BookModel;
