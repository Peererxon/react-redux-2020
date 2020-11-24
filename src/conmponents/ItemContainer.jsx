import React from 'react'
import { connect } from 'react-redux'
const ItemContainer = ({item}) => {
    return (
        <div>
            <h2> Number of items - { item } </h2>
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

export default connect(mapStateToProps)(ItemContainer)