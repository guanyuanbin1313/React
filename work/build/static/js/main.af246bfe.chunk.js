(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(8),l=a.n(s),r=a(2),c=a(3),h=a(5),u=a(4),o=a(6),d=a(1),m=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(d.a)(a)),a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){var t=this.props.nums,a=t>0?t:0,n=this.refs.myText.value;if(13===e.keyCode&&""!==n){var i={id:a,name:n,status:0};this.refs.myText.value="",this.props.addNewTask(i)}}},{key:"render",value:function(){return i.a.createElement("div",{className:"dialog"},i.a.createElement("div",null,i.a.createElement("h3",null," Todolist ")," ",i.a.createElement("input",{type:"text",ref:"myText",onKeyDown:this.handleClick,placeholder:"\u4f60\u60f3\u505a\u70b9\u4ec0\u4e48"}))," ")}}]),t}(n.Component),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).handleFinished=a.handleFinished.bind(Object(d.a)(a)),a.handleDelete=a.handleDelete.bind(Object(d.a)(a)),a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"handleFinished",value:function(){var e=this.props.item.status;e=0===e?1:0;var t={id:this.props.item.id,name:this.props.item.name,status:e};this.props.finishedChange(t)}},{key:"handleDelete",value:function(){this.props.totalChange(this.props.item)}},{key:"render",value:function(){var e=this.props.item,t=0===e.status?{backgroundColor:"#DFFCB5",color:"#2EB872"}:{backgroundColor:"#FFFA9D",color:"#FF9A3C",textDecoration:"line-through"};return i.a.createElement("li",{key:e.id,style:t},i.a.createElement("span",{onClick:this.handleFinished,id:e.id,className:"check-btn",style:{backgroundColor:0===e.status?"#fff":"#A1EAFB"}}),i.a.createElement("span",null,e.name),i.a.createElement("span",{onClick:this.handleDelete,className:"delete-btn"},"\u5220\u9664"))}}]),t}(n.Component),f=(a(14),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={list:[{id:0,name:"\u5403\u996d",status:0},{id:1,name:"\u7761\u89c9",status:0},{id:2,name:"\u6253\u8c46\u8c46",status:0}],finished:0},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"addTask",value:function(e){var t=this.state.list;t.push(e),this.setState({list:t})}},{key:"updateFinished",value:function(e){var t=0;this.state.list.forEach((function(a){a.id===e.id&&(a.status=e.status),1===a.status&&t++})),this.setState({finished:t})}},{key:"updateTotal",value:function(e){var t=[],a=0;this.state.list.forEach((function(n){n.id!==e.id&&(t.push(n),1===n.status&&a++)})),this.setState({list:t,finished:a})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container"},i.a.createElement(m,{addNewTask:this.addTask.bind(this),nums:this.state.list.length}),i.a.createElement("ul",null,this.state.list.map((function(t,a){return i.a.createElement(p,{item:t,finishedChange:e.updateFinished.bind(e),totalChange:e.updateTotal.bind(e),key:a})})),i.a.createElement("li",null,this.state.finished,"\u5df2\u5b8c\u6210\xa0/\xa0",this.state.list.length,"\u603b\u6570")))}}]),t}(n.Component));l.a.render(i.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.af246bfe.chunk.js.map