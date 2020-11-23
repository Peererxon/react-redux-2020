import React, { useState } from 'react'
import { buyCake } from '../redux/index'
import { connect } from 'react-redux'

function NewCakeContainer({ numberOfCakes,buyCake }){
    const [number, setnumber] = useState();
    return (
        <div>
            { numberOfCakes > 0 ? <h2>Number of cakes  { numberOfCakes } </h2> : <h2>Cakes are sold!</h2> }
           
            <input type="text" name="numero" id="numero" value= {number} onChange = { (e) => setnumber(e.target.value) }  />
    <button onClick = { () => buyCake(number) } > Buy { number } {(number < 2 && number >= -1)  ? 'cake' : 'cakes'} </button>
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
const mapStateToProps = state => ( {numberOfCakes:state.cake.numberOfCakes} )

//para utilizar nuestros actions
const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch( buyCake(number) )
    }
}

export default connect( 
    mapStateToProps, 
    mapDispatchToProps
    )(NewCakeContainer);