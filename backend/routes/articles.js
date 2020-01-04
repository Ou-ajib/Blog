const router = require('express').Router();
let Article = require('../models/article.model');

router.route('/').get((req, res) => {
    Article.find()
        .then(articles => res.json(articles))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const vote = Number(req.body.vote);

    const newArticle = new Article({title, description, vote});

    newArticle.save()
        .then(() => res.json('Article added !'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:title').post((req, res) => {
    Article.findOne({ title: req.params.title })
        .then(article => {
            article.vote = Number(req.body.vote) + 1;

            article.save()
                .then(() => res.json('Vote Updated !'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;