import React,{Component} from "react";
class MainModel extends Component{
  constructor(){
    super();
    this.state={
      db:false
    }
  }

  Db=()=>{
    this.setState({
      db:true
    },()=>{
      this.ondb.focus();
    })
  }

  blur=(ev)=>{

      let {id,checked}=this.props
      let newData={
        id:id,
        checked:checked,
        txt:this.ondb.value
      }

      this.props.chengaText(ev.target.value)
    
    this.setState({
      db:false
    })
  }

  changeChecked=()=>{
    this.props.changeChecked(this.props.id)
  } 

  remove=()=>{
    this.props.remove(this.props.id)
  }

  keyup=(ev)=>{
    if(ev.keyCode===13){
      this.blur();
    }
    if(ev.keyCode===27){
      this.setState({
        txt:this.props.txt,
        db:false
      })
    }
  }

  render(){
    let {txt,checked}=this.props;
    let aclass=checked?'completed':'';

    if(this.state.db){
      aclass +='editing';
    }

    return (
       <li className={aclass}>
            <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  onChange={this.changeChecked}
                  checked={checked} />
                <label
                onDoubleClick={this.Db}>
                  {txt}</label>

                <button className="destroy"
                  onClick={this.remove}
                ></button>
            </div>
            <input 
              ref={(elem)=>{this.ondb=elem}}
            type=""className="edit" 
            onBlur={this.blur}
            value={this.state.txt}
            onChange={this.onChange}
            onKeyUp={this.keyup}
            />
        </li>
    )
  }
}
/*MainModel.propTypes={
  checked:PropTypes.bool,
  txt:PropTypes.string
}*/
export default MainModel;
