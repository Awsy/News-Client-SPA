// Core
import React, { Component } from 'react';


// Instruments
import Styles from './styles.scss';

export default class RightBar extends Component {

// timer = setInterval(() => this.forceUpdate(), 1000);

    render () {
        return (
            <section className = { Styles.rightBarTitle }>
               
                <h2>Articles</h2>
            </section>
        );
    }
}
