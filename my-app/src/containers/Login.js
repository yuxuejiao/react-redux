import React from "react";
import {Button, Input} from "antd";
import {connect} from "react-redux";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "admin",
            psd: "123456"
        }
    }

    login = () => {
        const {user, psd} = this.state;
        if(user === "admin" && psd==="123456"){
            this.props.history.push("/main")
        }
    }

    inputChange = (inputType) => {
        return (e) => {
            const value = e.target.value;
            if (inputType === "user") {
                this.setState({user: value})
            } else {
                this.setState({psd: value})
            }
        }
    }

    render() {
        const {user, psd} = this.state;
        return <div style={{width: "50%"}}>
            <Input placeholder={"input user account"} value={user} onChange={this.inputChange("user")}/>
            <Input placeholder={"input password"} value={psd} onChange={this.inputChange("psd")}/>
            <Button onClick={this.login}>login in</Button>
        </div>
    }
}

export default connect()(Login);