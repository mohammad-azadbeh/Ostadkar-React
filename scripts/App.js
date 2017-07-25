import React, {Component} from 'react';

import Header from './components/Header';
import Slider from './components/Slider';
import About from './components/About';

export default class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row ok-header-bg">
                    <Header white={false} showCollapse={false}/>
                    <Slider/>
                </div>
                <About/>
            </div>
        )
    }
}