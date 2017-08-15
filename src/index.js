import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/*import Chlider from './chlider';*/
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';


let bool=false;

class App extends Component {

	constructor(){
		super();
		
	}

	render(){

		let h=null;
		if(!bool){
			h=<h1>你还没有登录</h1>;
		}else{
			h=<h1>欢迎加入 <button>退出</button></h1>;
		}

		return(
			<div>
				{h}
				<Link to="public">公共页面</Link><br/>
				<Link to="Login">受限页面</Link>
			</div>r
		)
	}
}

class Public extends Component {
	render(){
		return(
			<div>
				<p>我是公共页面</p>
			</div>
		)
	}
}

class Private extends Component {
	render(){
		return(
			<div>
				<p>我是受限页面</p>
			</div>
		)
	}
}

class Login extends Component {
	render(){
		return(
			<div>
				<Router>
					<Route path="/" component={App} />
				</Router>
			</div>
		)
	}
}



ReactDOM.render(
	(
		<Router>
			<div>
				<Route path="/" component={App}/>
				<Route path="/public" component={Public}/>
				<Route path="/Login" component={Login}/>
			</div>
		</Router>
	),
	document.getElementById('root')
);
