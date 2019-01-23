import React from "react";
import {Spin} from "antd";

export default class SpinItem extends React.Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <Spin size={"large"}/>
            </div>
        )
    }

}