import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/*import Chlider from './chlider';*/
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class App extends Component {
	render(){
		return(
			<div>
				<p>holler</p>
				<button>
					<Link to="/ppx">找皮皮虾</Link>
				</button>
			</div>
		)
	}
}

class PPA extends Component {
	render(){
		return(
			<div>
				<p>世界</p>
				<button>
					<Link to="/ppx">找皮皮虾</Link>
				</button>
			</div>
		)
	}
}

class PPX extends Component {
	render(){
		return(
			<div>
				<p>皮皮虾</p>
				<button>
					<Link to="/ppa">找holler</Link>
				</button>
			</div>
			
		)
	}
}

let arr=[
	{
		name:'app',
		component:<App />
	},
	{
		name:'ppa',
		component:<PPA />
	},
	{
		name:'ppx',
		component:<PPX />
	}	
];
	
const Child = (obj) => {

	let {match}=obj;
	let f=null;

 	f =arr.find((e) =>{
		if(e.name === match.params.id){
			return e;
		}
	})

	if(!f){
		return <App />
	}else{
		return (f.component)
	}
}

ReactDOM.render(
	(
		<Router>
			<div>
				<button>
					<Link to="/app">App</Link>
				</button>
				<button>
					<Link to="/ppa">PPA</Link>
				</button>
				<button>
					<Link to="/ppx">ppx</Link>
				</button>
				<Route path="/:id" component={Child}/>
			</div>
		</Router>
	),
	document.getElementById('root')
)
