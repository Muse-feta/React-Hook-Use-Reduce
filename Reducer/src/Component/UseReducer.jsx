// The useReducer Hook accepts two arguments. The reducer function contains your custom state logic and 
// the initialState can be a simple value but generally will contain an object. 
// The useReducer Hook returns the current state and a dispatch method.


import React, {useState, useReducer} from 'react'


function reduce(state, action) {
        // return {count: state.count + 1}
        switch(action.type) {
            case 'increase':
                return {count: state.count + 1}
            case 'decrease':
                return { count: state.count - 1 };
            default:
                return state    
        }
}

function UseReducer() {

    let [count, setcount] = useState(0);
    let [state, dispatch] = useReducer(reduce, {count: 0})

   function increase () {
    // setcount((x) => x + 1);
    dispatch({ type: "increase" });
   }
   
   function decrease () {
    //  setcount((x) => x - 1);
     dispatch({ type: "decrease" });
   }


  return (
    <div>
      <h1>{state.count} </h1>
      <button onClick={increase}>Increase</button> <br />
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default UseReducer