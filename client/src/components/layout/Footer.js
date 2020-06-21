import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="page-footer indigo font-small pt-0 foot">
                <div className="container">
                    <div className="row pt-5 mb-3 text-center d-flex justify-content-center">
                        <div className="row b-3">
                            <h6 className="title font-weight-bold">
                                <a href="/">Home</a>
                            </h6>
                        </div>
                        <div className="col-md-2 b-3">
                            <h6 className="title font-weight-bold">
                                <a href="/">About us</a>
                            </h6>
                        </div>
                        <div className="col-md-2 b-3">
                            <h6 className="title font-weight-bold">
                                <a href="/">Terms & Conditions</a>
                            </h6>
                        </div>
                    </div>
                    <hr className="rgba-white-light" style={{margin: "0 15%"}}/>
                </div>
                <div className="footer-copyright text-center py-3">
                    <div className="container-fluid">
                        &copy; {new Date().getFullYear()} Copyright:
                        <a href="/"> Trufla</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
