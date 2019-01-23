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
        使用bindActionCreators(actionCreators, dispatch):  把一个 value 为不同 action creator 的对象，转成拥有同名 key 的对象。
        同时使用 dispatch 对每个 action creator 进行包装，以便可以直接调用它们。
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
    
        
        
        
            
            
