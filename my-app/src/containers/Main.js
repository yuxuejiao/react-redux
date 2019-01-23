import React from "react";
import {Button} from "antd";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getData} from "../actions/Request";
class Main extends React.Component {

    render() {
        console.log("this.props: ", this.props);
        const {getData, mainData = ""} = this.props;
        return (
            <>
                <Button onClick={getData}>调用api获取数据</Button>
                <div>
                    <span>展示数据</span>
                    <a>{mainData}</a>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state)=>{
    return state.MainReducer
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({getData}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);