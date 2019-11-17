import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
export default class My extends Component {
    render() {
        return (
            <div>
                {/* NavBar */}
                <NavBar
                    style={{ backgroundColor: 'rgb(64,203,204)', color: 'white' }}
                >我的</NavBar>
            </div>
        )
    }
}
