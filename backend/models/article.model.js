const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 4

    },
    description: {
        type: String,
        minlength: 10
    },
    vote: {
        type: Number,
    },
    }, {
        timestamps: true,
    }
);

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;