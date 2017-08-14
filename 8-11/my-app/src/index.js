import React,{Component} from "react";
import 	PropType from 'prop-types';
import ReactDOM from "react-dom";
import './todoList/css/index.css';
import HeadModel from './todoList/components/header';
import MainModel from './todoList/components/main';
import Bottom from './todoList/components/Bottom';

class App extends Component{
	
	//初始化
	constructor(){
	    super();
	    this.state={
	      val:'',
	       data:[],
         View:'#/all'
	    }
  }

//改变输入框内容
  changeVal=(newVal)=>{
  	this.setState({
  	val:newVal
  	})
  }
  
//checked
	changeChecked=(id)=>{
		let {data}=this.state;
		let data2=Object.assign(data);
		data2.forEach((e,i)=>{
			if(e.id === id){
				e.checked=!e.checked
			}
		})
		this.setState({
			data:data2,
		})
	}

//添加
	changeData=(newData)=>{
		let {data}=this.state;
		let data2=Object.assign(data);
		data2.push(newData);
		this.setState({
			data:data2,
			val:''
		})
	}

//删除
	remove=(id)=>{
		let {data}=this.state;
		let data2=Object.assign(data);
		data2=data.filter((e,i)=>{
			return e.id !=id
		})
		this.setState({
			data:data2
		})
	}

//全选
	changeall=()=>{
		let {data}=this.state;
		let data2=Object.assign(data);
		let {checked}=this.all
		data2.forEach(e=>{
			e.checked= checked
		})
		this.setState({
			data:data2
		})
	}

//替换数据
	chengaText=(newData)=>{
		let {data}=this.state;
		let data2=Object.assign(data);

		data2.forEach((e,i)=>{
			if(e.id == newData.id){
				data2.splice(i,1,newData)
			}	
		})

		this.setState({
			data:data2
		})
	}

  //清除完成项
  clearFinish=()=>{
    let {data}=this.state;
    let data2=Object.assign(data);

    data2=data2.filter(e=>{
      return !e.checked;
    })
    this.setState({
      data:data2
    })
  }

  //改变视图
  changeView=(newView)=>{
    this.setState({
      view:newView
    })
  }

  render(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

  	let {data}=this.state;
  	let list=null;
  	let  all:false;
    let changeAll=null;
    let footer:null;
    let filterView=Object.assign(data);
    let len=data.length;

    filterView=filterView.filter(e=>{

      if(e.checked)len--;
      switch(this.state.View){
        case '#/active':
          return !e.checked;
          break;
        case '#/completed':
          return !e.checked;
          break;
        default:
          return Object.assign(data);
          break;
      }
    })

  	list=filterView.map((e,i)=>{
  		let data={
  			txt:e.txt,
  			checked:e.checked,
  			id:e.id,
  			key:i,
  			changeChecked:this.changeChecked,
  			remove:this.remove,
  			chengaText:this.chengaText
  		}
  		return <MainModel {...data}/>
  	})

    if(data.length){
      all=data.every(e=>e.checked);
      changeAll=(
        <input className="toggle-all" type="checkbox" checked=""
            checked={all}
            onChange={this.changeall}
            ref={(elem)=>{this.all=elem}}/>
      )

      let footerData={
        num:len,
        clearFinish:this.clearFinish,
        changeView:this.changeView,
        View:this.state.View
      }
      footer=(<Bottom {...footerData}/>);
      localStorage.setItem('data',JSON.stringify(data));
    }


    return (
      <div>
        <HeadModel  
        	changeVal={this.changeVal}
          val={this.state.val}
        	changeData={this.changeData}/>
        	
        	<section className="main" ref={(elem)=>{this.main=elem}}>
            {changeAll}
            <ul className="todo-list">{list}</ul>         
            </section>
            {footer}
      </div>
    )
  }
}

function getItem(data){
  return JSON.parse(localStorage.getItem(data)||[{checked:false,txt:'hehe',id:1}]);
}
ReactDOM.render(<App />,document.getElementById('app'))

if (module.hot) {
  module.hot.accept();
}
