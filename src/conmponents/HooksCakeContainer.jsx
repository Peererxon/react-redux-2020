import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { buyCake } from '../redux';
//componente hecho para utilizar redux con hooks en lugar de connect, disponible a partir de react-redux 7.1

const HookCakeContainer = () => {
    //usando estado con hooks
    const numOfCakes = useSelector( state => state.cake.numberOfCakes )
    //usando actions con hooks
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of cakes - { numOfCakes } </h2>
            <button onClick = { () => dispatch( buyCake() ) } > Buy cake With Hook </button>
        </div>
    )
}

export default HookCakeContainer;