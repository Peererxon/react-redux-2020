import React from 'react'
import { buyCake } from '../redux/index'
import { connect } from 'react-redux'

function CakeContainer({ numberOfCakes,buyCake }){
    return (
        <div>
            <h2>Number of cakes  { numberOfCakes } </h2>
            <button onClick = { buyCake } >Buy cake</button>
        </div>
    )
}

// con esto invocamos a las propiedades del estado (store)
// const mapStateToProps = state => {
//     return {
//         numberOfCakes : state.numberOfCakes

//     }
// }

//se puede resumir asi cuando regrese una sola propiedad
const mapStateToProps = state => ( {numberOfCakes:state.numberOfCakes} )

//para utilizar nuestros actions
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch( buyCake() )
    }
}

export default connect( 
    mapStateToProps, 
    mapDispatchToProps
    )(CakeContainer);