import React, {Component} from 'react';

export default class Slider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ok-wrapper">
                <div className="ok-header">
                    <div className="mt-md-5 mt-2">
                        <div className="row rtl">
                            <div className="col col-12 col-md-8">
                                <div className="m-md-5 mt-5 mr-5">
                                    <h1 className="text-white text-huge">
                                        هزینۀ کمتر،
                                        <br/>
                                        کیفیت بهتر،
                                        <br/>
                                        آسان‌تر
                                    </h1>
                                </div>
                            </div>
                            <div className="col col-12 col-md-4">
                                <img className="ok-header-mobile" src="./assets/images/screen1.png"/>
                                <img className="ok-header-mobile" src="./assets/images/screen2.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}