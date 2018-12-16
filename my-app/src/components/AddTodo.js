import React from "react";
import {Input, Button} from "antd";
import {addTodo} from "../redux/actions";
import {connect} from "react-redux";
class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: ""
        }
    }
    inputChange = (e)=>{
        this.setState({input: e.target.value});
    }
    handleAddTodo = ()=>{
        this.props.addTodo(this.state.input);
        this.setState({input: ""});
    }
    render(){
        return <>
        <Input placeholder="输入点击事件" onChange={this.inputChange}/>
        <Button onClick={this.handleAddTodo}>Add Todo</Button>
        </>
    }
}
export default connect(null, {addTodo})(AddTodo)