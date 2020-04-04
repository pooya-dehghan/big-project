import React,{ Component } from 'react' 
import Aux from '../../../hoc/Aux'
import Button from '../../../components/UI/Button/Button'
import { connect } from 'react-redux'

class OrderSummary extends Component{
    
    render(){
    const ingredientSummary = Object.keys(this.props.brg)
    .map((ingr) =>
    {
        return (
            <li style = {{listStyleType:'none'}}>
                <span style = {{ textTransform : 'capitalize' }}>{ingr} : { this.props.brg[ingr] } </span>
            </li>
        )
    }
)
 return(
    <Aux>
        <h4> YOUR ORDRER IS LIKE THIS</h4>
        <ul>
            { ingredientSummary }
        </ul>
        <p><strong> the total price is :{this.props.prc}</strong></p>
        <h5> WOULD YOU LIKE TO PROCEED ?? </h5>
        <Button btnType = "Danger" clicked={this.props.orderCancel}>CANCEL</Button>
        <Button btnType = "Success" clicked={this.props.orderContinue}>CONTINUE</Button>
    </Aux>
        )
    }
}
 const mapStateToProps = state => {
     return {
         brg: state.brg.ingredients,
         prc : state.brg.totalPrice
     }
 }
export default connect(mapStateToProps,null)(OrderSummary)