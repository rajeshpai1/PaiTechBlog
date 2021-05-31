import React from 'react';
import { Layout, Row, Col } from 'antd';

const Footer = () => {
    return (
        <Layout.Footer>
            <Row id="footer">
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Row className={'footer'}>
                        <Col xs={8} sm={8} md={8} lg={8}>
                            <div className="space">
                                <h3>Contact Us</h3>
                                {/* <span>
                                    <a href="mailto:info@hotelsoft.com">info@hotelsoft.com</a>
                                </span>{' '}
                                <br />
                                <span className="space">510-371-6167</span> */}
                            </div>
                        </Col>
                        <Col xs={8} sm={8} md={8} lg={8}>
                            <div className="space">
                                <h3>USA</h3>
                                {/* <span>
                                    6701 Koll Center Pkwy #340 <br />
                                    Pleasanton, CA 94566
                                </span> */}
                            </div>
                        </Col>
                        <Col xs={8} sm={8} md={8} lg={8}>
                            <div className="space">
                                <h3>India</h3>
                                {/* <span>
                                    Neil Rao Towers, Suite 5EW
                                    <br />
                                    Whitefield, Bangalore 560066
                                </span> */}
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <div className={'copyRightInfo text-align-center'}>
                        &copy; {new Date().getFullYear()} Company Name. All rights reserved.
                    </div>
                </Col>
            </Row>
        </Layout.Footer>
    );
};

export default Footer;
