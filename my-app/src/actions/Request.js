import {GET_DATA_SUCCESS} from "./Type";

export const getData = () => {
    return (dispatch, getState) => {
        // 发送请求，然后在请求返回之后，发起dispatch，此处省略
        setTimeout(()=>{
            dispatch(getDataSuccess("调用api成功"));
        }, 3000)
    }
}

export const getDataSuccess = (res)=>{
    return {
        type: GET_DATA_SUCCESS,
        data: res
    }
}




