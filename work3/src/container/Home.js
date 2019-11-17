
import React, { Component } from 'react'
import { NavBar, Carousel, Flex, WhiteSpace } from 'antd-mobile';
export default class Home extends Component {
    state = {
        data: ['1', '2'],
        imgHeight: 176,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['1', '2'],
            });
        }, 100);
    }

    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: 'rgb(64,203,204)', color: 'white' }}
                >住吧家居</NavBar>

                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.data.map(val => (
                        <img src={require(`../images/home_${val}.png`)}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    ))}
                </Carousel>

                <div className="flex-container">
                    <Flex>
                        <Flex.Item >
                            <img className='placeholder' src={require('../images/home_3.png')}
                                alt=""
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Flex.Item>
                        <Flex.Item>
                            <img className='placeholder' src={require('../images/home_4.png')}
                                alt=""
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Flex.Item>
                        <Flex.Item>
                            <img className='placeholder' src={require('../images/home_5.png')}
                                alt=""
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                </div>
                <div className='hot'>
                    &nbsp; 热门推荐
                </div>
                <div className='last'>
                    <p>什么是英伦装修风格 英伦风家装 英伦风格装修效果图</p>
                    <img src={require('../images/home_6.png')} />
                </div>
            </div>
        )
    }
}