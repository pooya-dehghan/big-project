import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControlds/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderySummary'
import axiosInstace from '../../axios-order'
import Spinner from '../../components/UI/spinner/spinner'
import withErrorHandler from '../../hoc/ErrorHandler'
import { connect } from 'react-redux'


class BurgerBuilder extends Component {
    
    constructor() {
        super()
        this.state = {
            totalprice : 4,
            purchasable: false,
            ordered: false,
            loading:false,
            error:false,
        }  
    }
    componentDidMount() {
        axiosInstace.get('https://pooyas-burger.firebaseio.com/ingredients.json')
            .then(ingredients => {
                this.setState({ingredients:ingredients.data})
            })
            .catch(error => {
                this.setState({error:true})
            })
    }
   
    orderHandler = () => {
        this.setState({ordered : true})
    }
    cancelHandler = () => {
        this.setState({ordered : false})
    }
    continueHandler = () => {
        this.setState({loading:true})
        this.props.history.push('/checkout/')
    }

 render(){
     let orderSummary = null
    let burger = this.state.error ?<p>ingredients do not load</p> : <Spinner />
    if (this.state.ingredients) {
        burger = (
            <Aux>
                {orderSummary}
                    <Burger ingridients = { this.state.ingredients} />
                <BuildControls 
                    purchasable = { this.state.purchasable }
                    ordered = { this.orderHandler }
                />
            </Aux>
        )
        orderSummary = 
            <Modal show = {this.state.ordered} canceled = { this.cancelHandler }>
                        <OrderSummary 
                            orderCancel = { this.cancelHandler }
                            orderContinue = { this.continueHandler }
                            ingredients = {this.state.ingredients}
                            price = { this.state.totalprice }
                        />
            </Modal>       
    }
    if(this.state.loading) {

    orderSummary =
        <Modal show = {this.state.ordered} canceled= { this.cancelHandler } noBC>
            <Spinner />
        </Modal> 
     }
    
     return(
         <Aux>
            { orderSummary }
            { burger }
         </Aux>
     )
 }
}
const mapStateToProps = state => {
    return{
        brg: state.brg.ingredients
    }
}
export default connect (mapStateToProps,null)(BurgerBuilder)