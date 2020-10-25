import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfo } from './actions/users'
 
const ReduxIndex = () => {

const users = useSelector(state => state.users)


const dispatch = useDispatch(users)
  
  //CLASS COMPONENT -> props dont need anymore
  // const handleClick = (type) => {
  //     if(type === 'name') {
  //       props.setUserInfo({'name': 'bossAlex'})
  //     } else if(type === 'age'){
  //       props.setUserInfo({'age': 25})
  //     } else {
  //       props.setUserInfo({'gender' : "male"})
  //     }
  // }


  const handleClick = (type) => {
      if(type === 'name') {
        dispatch(setUserInfo({'name': 'bossAlex'}))
      } else if(type === 'age'){
        dispatch(setUserInfo({'age': 25}))
      } else {
        dispatch(setUserInfo({'gender' : "male"}))
      }
  }
  
  return (
    <>
      {/* hi {props.users.info.name} */}
      <button onClick={()=> dispatch(setUserInfo({'name': 'bossAlex'}))}>Add Name</button>
      <button onClick={()=>handleClick('age')}>Add Age</button>
      <button onClick={()=>handleClick('gender')}>Add Gender</button>
    </>
  )
}

//*Remember Also the provider from the root


//class
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'


// const mapStateToProps = state => {
//   return{
//     users : state.users //kung ano name reducers sa store.js
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//     setUserInfo //kung ano name ng function sa action/users.js
//   },dispatch)
// }


// export default connect(mapStateToProps,mapDispatchToProps)(App)


export default ReduxIndex