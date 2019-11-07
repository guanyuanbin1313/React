import React, { Component } from 'react'
import '../index.css'

import {Link} from "react-router-dom"
export default class All extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        console.log(this.props);
        let page=this.props.match.params.id
        fetch('https://cnodejs.org/api/v1/topics?page='+1)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            this.setState({
                data:res.data
            })
        })
    }
    componentDidUpdate(prevProps,prevState){
        console.log(prevProps.match.params.id)
        if(prevProps.match.params.id!==this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res)
                    this.setState({
                        data: res.data
                    });
                })
        }
    }
    render() {
        console.log(this.state.data)
        let {url} = this.props.match
        return (
            <div>
            {
                this.state.data.map((item)=>(
                <div className="inner" key={item.id}>
                    <a className="user_avatar">
                        <img src={item.author.avatar_url} title={item.author.loginname} />
                    </a>
                    <span className="reply-count">
                        <span className="reply">{item.reply_count}</span>
                        <span className="count">/</span>
                        <span className="count">{item.visit_count}</span>
                    </span> 
                    <a className="pull-right" href={"https://cnodejs.org/topic/"+item.id}>
                        <img src="https://avatars2.githubusercontent.com/u/5507021?v=4 & s=120" />
                        <span>3 天前</span>
                    </a>
                    {
                        (item.top===true?(
                            <span className="topa">置顶</span>
                        ):(item.tab==="ask"?(
                            <span className="ask">问答</span>
                        ):(
                            <span className="share"> 分享</span>
                        )))
                    }
                    {/* <a className="topic_title" href="/infor" title={item.title} >
                        {item.title}
                    </a> */}
                    <Link className="topic_title" to={`/home/infor/`+item.id}  >
                    {item.title}
                    </Link>
                </div>
                ))
            }
            
            </div>
        )
    }
}
