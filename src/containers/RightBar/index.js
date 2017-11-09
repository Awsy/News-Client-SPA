// Core
import React, { Component } from 'react';
import RightBarTitle from '../../components/RightBarTitle';

// Instruments
import Styles from './styles.scss';

export default class RightBar extends Component {

// timer = setInterval(() => this.forceUpdate(), 1000);

    render () {
        return (
            <section className = { Styles.rightBar }>
               
                <RightBarTitle />
            </section>
        );
    }
}
