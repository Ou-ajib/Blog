import React, { Component } from 'react'
import axios from 'axios';


const Article = props => (
    <div>
        <h3>{ props.article.title }</h3>
        <p>{ props.article.description }</p>
        <button onClick={(i)=> props.onVote(i) } type="button" className="btn btn-primary" aria-label="Left Align">
        { props.article.vote }
        </button>
    </div>
)


class Articles extends Component {

    constructor(props) {
        super(props);

        this.onVote = this.onVote.bind(this);
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:2000/articles/')
            .then(res => {
                this.setState({ articles: res.data })
            })
            .catch((err) => {
                console.log(err)
            });
    }

    onVote(i) {
        const body = {
            vote: this.state.articles[i].vote
        };
        console.log(this.state.articles[i].title);

        axios.post('http://localhost:2000/articles/update/'+this.state.articles[i].title,body)
            .then(res => {
                console.log(res);           
                 window.location = ('/articles');

            });
    }

    articleList() {
        return this.state.articles.map((currentArticle,i) => {
            return <Article onVote={()=> this.onVote(i) } article={ currentArticle } key={ currentArticle._id } />
        })
    }

    render() {
        return (
            <div>
                <h2>Articles !</h2>
                <br/>
                { this.articleList() }
            </div>
        )
    }
}

export default Articles;
