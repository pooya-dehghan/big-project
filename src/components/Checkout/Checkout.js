import React ,{ Component } from 'react'
import CheckoutSummary from '../Order/CheckoutSummary/ChekoutSummary'
import ContactData from './ContactData/ContactData'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
class CheckOut extends Component {
    
    checkoutCancelHandler = () => {
        this.props.history.goBack('/')
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data/')
    }
    render() {
        return(
            <div>
                <CheckoutSummary
                 ContinueHandler = { this.checkoutContinueHandler }
                 CancelHandler = { this.checkoutCancelHandler }
                />
                <Route
                    path={this.props.match.url + '/contact-data/'}
                    render={() => (<ContactData ingredients = {this.props.brg} price = {this.props.prc}/>)}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        brg: state.brg.ingredients,
        prc: state.brg.price
    }
}

export default connect(mapStateToProps,null)(CheckOut)