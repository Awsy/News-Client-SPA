// Core
import React, { Component } from 'react';
import News from '../../components/News';
// Instruments
import Styles from './styles.scss';

export default class Main extends Component {
   
    render () {
        const {posts} = this.props;
        let news = [];
        
        if (posts){
         news = posts.map((post, key) => <News key = {key} post = {post}/>);
         console.log(posts.length);
        }
        
        return (
            <section className = { Styles.main }>
                {news}
            </section>
        );
    }
}
