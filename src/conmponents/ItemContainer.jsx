import React from 'react'
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

const ItemContainer = ({ item,buyItem }) => {
    return (
        <div>
            <h2> Number of items - { item } </h2>
            <button onClick = { ()=> buyItem() } >Buy item </button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? 
    state.cake.numberOfCakes 
    : state.iceCream.numberOficeCreams
    return {
        item: itemState
    }
}

const mapDispatchToProps = ( dispatch, ownProps ) => {
    const dispatchFunction = ownProps.cake 
    ? () => dispatch( buyCake() ) 
    : () => dispatch( buyIceCream() );
    // se asigna el dispatch segun la propiedad que tenga el componente
    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)