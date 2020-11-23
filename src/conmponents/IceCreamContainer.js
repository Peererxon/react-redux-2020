import React from 'react'
import { buyIceCream } from '../redux/index'
import { connect } from 'react-redux'

function CakeContainer({ numberOfIceCreams,buyIceCream }){
    return (
        <div>
            <h2>Number of IceCreams  { numberOfIceCreams } </h2>
            <button onClick = { buyIceCream } >Buy Ice creams</button>
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
// se le agrego state.iceCream ya que en store.js se definio como iceCream a la propiedad que tendra esos reducers
const mapStateToProps = state => ( {numberOfIceCreams:state.iceCream.numberOficeCreams} )
//para utilizar nuestros actions
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch( buyIceCream() )
    }
}

export default connect( 
    mapStateToProps, 
    mapDispatchToProps
    )(CakeContainer);