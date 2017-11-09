// Core
import React, { Component } from 'react';
import LeftBarTitle from '../../components/LeftBarTitle';
// Instruments
import Styles from './styles.scss';

export default class LeftBar extends Component {
    constructor () {
        super();
        this.change = ::this._change;
        this.sourceReceiving = ::this._sourceReceiving;
        this.latestNews = ::this._latestNews;
        this.changingSourceNum = ::this._changingSourceNum;
    };

    state = {
        sources: [],
    }

    _sourceReceiving () {
            fetch('https://newsapi.org/v1/sources?language=en', {
                method: 'GET'
            }).then((response) => {
                return response.json();
            }).then(({sources}) => {
                // console.log(sources);
                this.setState(()=> ({
                    sources
                }));
            });
        };

        componentWillMount (){
                this.sourceReceiving();
         };

        _change(event){
        event.preventDefault()
        const {change} = this.props
        change(event.currentTarget.dataset.id);
        
        // event.target.value
        };

        _changingSourceNum(event){
        const {changingSourceNum} = this.props;
        console.log(changingSourceNum);
        changingSourceNum(event.currentTarget.dataset.count);
        };

        _latestNews(){
            const {latestNews} = this.props;
            console.log(1);
            latestNews();
        };

    render () {
        const {sources} = this.state
        const sourcesList = sources.map((source) => {
            return <li onClick = {this.change} data-id={source.id} key = {source.id}><a href="#" >{source.name}</a></li>
        });
        return (
            <section className = { Styles.leftBar }>
               
                <LeftBarTitle />
                <input type = 'button' className = {Styles.buttons} value = 'Get the Latest News' onClick = {this.latestNews}/>
                <input type = 'button' className = {Styles.buttons} value = '15 Posts' data-count= '15' onClick = {this.changingSourceNum}/>
                <input type = 'button' className = {Styles.buttons} value = '25 Posts' data-count= '25' onClick = {this.changingSourceNum}/>
                <ul>{sourcesList}</ul>
            </section>
        );
    }
}
