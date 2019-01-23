### react-redux
Redux的官方React绑定库。它能够使你的React组件从Redux store中读取数据，并且向store派发actions，从而更新数据。

API:    
    - 1、 Provider: 能够使所有的组件都能访问到redux store中的数据。  
            在Provider标签包围的所有组件里，都能通过prop拿到store。而不用在每个组件中单独引入。   
    - 2、 connect: 组件能够从store的状态树中读取所需要的值，当store中的状态变更，组件会重新读取值，重新渲染。
connect: 
- 1、mapStateToProps      
   * store中的state改变，会触发该方法  
   * 参数为store的整个状态树，返回值必须是一个纯对象，其中包含的值是该组件所需要的数据。
    **定义 mapStateProps**   
    mapStateToProps 必须定义为一个纯函数.      
    ```
      const mapStateToProps = (state) =>{
        return {
          xxx: state.xxx
        }
      }   
    ```    
   参数：state, ownProps    
   返回值
     * 对象中的每个变量，在组件中都能从props中获取
     * 对象中的变量的值，会决定你的组件是否重新渲染
   
    每次分发action，它会调用store.getState()，校验lastState是否等于currentState。如果两个state的值都是同一引用，它不会触发mapStateProps
    方法，从而不会重新渲染。   

- 2、mapDispatchToProps：dispatch action to store    
    分发action的两种方式:   
    * 不定义mapDispatchProps，直接通过props.dispatch(action creators)。
    * 定义mapDispatchProps。   
       参数：dispatch, props   
        ```
            const increment = () => ({ type: 'INCREMENT' })
            const decrement = () => ({ type: 'DECREMENT' })
            const reset = () => ({ type: 'RESET' })
            
            const mapDispatchToProps = dispatch => {
              return {
                // dispatching actions returned by action creators
                increment: () => dispatch(increment()),
                decrement: () => dispatch(decrement()),
                reset: () => dispatch(reset())
              }
            }
        ```
        使用bindActionCreators(actionCreators, dispatch):  自动把多个action创建函数绑定到dispatch方法上
        ```
            import { bindActionCreators } from 'redux'
            
            const increment = () => ({ type: 'INCREMENT' })
            const decrement = () => ({ type: 'DECREMENT' })
            const reset = () => ({ type: 'RESET' })
            
            import { bindActionCreators } from 'redux'
            // ...
            
            function mapDispatchToProps(dispatch) {
              return bindActionCreators({ increment, decrement, reset }, dispatch)
            }
            
            // component receives props.increment, props.decrement, props.reset
            connect(
              null,
              mapDispatchToProps
            )(Counter)
            
        ```
        当定义了mapDispatchToProps时，组件不再能直接从props中获取到dispatch方法。所以需要我们在mapDispatchProps中
        手动传参dispatch
        ```
           funcion mapDispatchToProps(dispatch){
                return {
                    ...bindActionCreators({ increment, decrement, reset }, dispatch),
                    dispatch
                }
           }
        ```
    
### redux-thunk 
Redux Thunk middleware allows you to write action creators that return a function instead of an action. 
The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. 
The inner function receives the store methods dispatch and getState as parameters. 
同步action：创建action和dispatch action creator(action creator返回的是对象)到 reducer这个过程是同步的。         
实现异步action就要延迟dispatch action creator这一步。     
高阶函数 ---> dispatch的action creator返回从action对象变为函数   
当action创建函数返回为函数时，函数会被中间件redux-thunk执行，该函数并不是纯函数，在其中可以执行异步操作，可以dispatch对象。返回的函数的
参数是dispatch和getState这两个 Redux 方法   
```
const actionCreators = ()=>{
    return (dispatch, getState)=>{
        
    }
}
```

        
        
            
            
