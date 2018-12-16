### react-redux
it lets your react components read data from a redux store, and dispatch actions to the store to update data.

API: 
    - 1、 Provider: provide store as a prop to the rest of your app
            在Provider标签包围的所有组件里，都能通过prop拿到store。而不用在每个组件中单独引入。
    - 2、 connect:  for you to read values from the Redux store (and re-read the values when the store updates).
        two arguments: 
         - 1、mapStateToProps：
            called every time the store state changes. It receives the entire store state, and should return an object of data this component needs
         
         - 2、mapDispatchToProps