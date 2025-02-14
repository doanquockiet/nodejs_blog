const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const CourseSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, maxLength: 600 },
  image: { type: String },
  videoId: { type: String, maxLength: 255 },
  level: { type: String, maxLength: 255 },
  slug: { type: String, slug: 'name',unique: true },
},{
  timestamps: true,
});

module.exports = mongoose.model('Course', CourseSchema);
