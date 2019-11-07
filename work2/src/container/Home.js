import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import '../index.css'
import All from './All'
import Essence from './Essence'
import Share from './Share'
import Questions from './Questions'
import Test from './Test';

export default class Home extends Component {
    render() {
        let {url} = this.props.match
        // console.log(this.props)
        return (
            <div>
                <div className="home">
                    <Link className="home-title" to={`${url}/all`}>全部</Link>
                    <Link className="home-title" to={`${url}/essence`}>精华</Link>
                    <Link className="home-title" to={`${url}/share`}>分享</Link>
                    <Link className="home-title" to={`${url}/questions`}>问答</Link>
                    <Link className="home-title" to={`${url}/zhaopin`}>招聘</Link>
                    <Link className="home-title" to={`${url}/test`}>客户端测试</Link>
                </div>
                <div>
                    <Route exact path={url+'/all'} component={All}/>
                    <Route path='/home/all/:id' component={All}/>
                    <Route exact path={url+'/share'} component={Share}/>
                    <Route path='/home/share/:id' component={Share}/>
                    <Route exact path={url+'/essence'} component={Essence}/>
                    <Route path='/home/essence/:id' component={Essence}/>
                    <Route exact path={url+'/questions'} component={Questions}/>                    
                    <Route path='/home/questions/:id' component={Questions}/>
                    <Route path='/home/test/:id' component={Test} />                    
                </div>
            </div>
        )
    }
}