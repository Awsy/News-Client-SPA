// Core
import React, { Component } from 'react';
import Main from '../Main';
import RightBar from '../RightBar';
import LeftBar from '../LeftBar';


// Instruments
import Styles from './styles.scss';
import moment from 'moment';

export default class App extends Component {
    constructor () {
        super();
        this.newsGetting = ::this._newsGetting;        
        this.sourceChange = ::this._sourceChange;
        this.getLatestNews = ::this._getLatestNews;
        this.changingSourceNum = ::this._changingSourceNum;
    };

    state = {
        posts: [],
        source: 'talksport',
        sortBy: 'latest',
        count: 10
    };

    _sourceChange =(source) =>{
        this.setState(() => ({
             posts: [],
             
        }));
        this.newsGetting(source, true);
    };

    _newsGetting (source, all) {
        console.log('source', source);
            fetch(`https://newsapi.org/v1/articles?source=${source}&apiKey=8d0da10868f14f719b2131ceaadf366c`, {
                method: 'GET'
            }).then((response) => {
                return response.json();
            }).then(({articles}) => {
                
                this.setState(({ posts })=> ({
                    posts: all ? [...posts, ...articles] : [...posts, articles[0]]
                }));
            });
        };
    
        componentWillMount() {
            // this._newsGetting();
            // this.timer = setInterval(() => 
            //     this._newsGetting()
            // , 1000);
            this.getLatestNews();
        };
    
        componentWillUnmount () {
            clearInterval(this.timer);
        };

        _liveChanging (){
            // change(event.currentTarget.dataset.id);
        };
        _getLatestNews () {
            const {count} = this.state;
            this.setState(() => ({
                posts: [],
           }));
            fetch('https://newsapi.org/v1/sources?language=en', {
                method: 'GET'
            }).then((response) => {
                return response.json();
            }).then(({sources}) => {
                sources.map((source, index) => {
                    if (index < count) {
                        this._newsGetting(source.id);
                    }
                });
            });
        };

        _changingSourceNum(value){
            console.log('value', value);
            this.setState(() => ({
                count: value
           }), this.getLatestNews);
            };
    render () {
        const {posts} = this.state;
        return (
            <section className = { Styles.app }>
            
               <LeftBar change = {this._sourceChange} latestNews = {this.getLatestNews} changingSourceNum = {this.changingSourceNum}/>
               <Main posts = {posts}/>
               <RightBar />
            </section>
        );
    }
}


//sortBy=${sortBy}&