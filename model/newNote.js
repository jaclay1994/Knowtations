const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newNoteSchema = new Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  date: {type: Date, default: Date.now},
});

const Notebook = mongoose.model('Notebook', newNoteSchema);

module.exports = Notebook;
