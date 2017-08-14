import React,{Component} from "react";
class Bottom extends Component {
    constructor(){
      super();
      this.state={
        list:[
        {name:'全部',checked:true,hash:'#/all'},
        {name:'未完成',checked:false,hash:'#/active'},
        {name:'已完成',checked:false,hash:'#/completed'}
        ]
      }
    }

    click=()=>{
      this.props.clearFinish();
    }
  changeView=(ev)=>{
    this.props.changeView(ev.target.hash);
  }
  render(){

    return(
    <footer
      className="footer" >
      <span className="todo-count">
        <strong>{this.props.num}</strong>
        <span>条未选中</span>
      </span>
      <ul className="filters">
        <li>
          <a href="#/all"
          className={this.props.view=='#/all'}
          onClick={this.changeView}
          >全部</a>
        </li>
        <li>
          <a href="#/active"
          className={this.props.view=='#/active'}
          onClick={this.changeView}
          >未完成</a>
        </li>
        <li>
          <a href="#/completed"
          className={this.props.view=='#/completed'}
          onClick={this.changeView}
          >已完成</a>
        </li>
      </ul>
      <button
        className="clear-completed"
        onClick={this.click}
      >
          清除完成项
      </button>
    </footer>
    )
  }
}

export default Bottom