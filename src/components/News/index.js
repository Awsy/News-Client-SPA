// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';

export default class News extends Component {

// timer = setInterval(() => this.forceUpdate(), 1000);

    render () {
        const {post} = this.props;
        return (
            <section className = { Styles.news }>
                <p>{post.author}</p>
                <p>{post.discription}</p>
                <p>{post.publishedAt}</p>
                <p>{post.title}</p>
                <p>{post.url}</p>
                <img src = {post.urlToImage}/>
            </section>
        );
    }
}
