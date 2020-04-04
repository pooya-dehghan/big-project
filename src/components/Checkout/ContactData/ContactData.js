import React ,{ Component } from 'react'
import Button from '../../UI/Button/Button'
import classes from './ContactData.module.css'
import axiosInstace from '../../../axios-order'
import Spinner from '../../UI/spinner/spinner'
import {withRouter} from 'react-router-dom'
import Input from '../../UI/input/input'
class ContactData extends Component {
    state =  {
       orderForm : {
           name : {
            elementType: 'input',
            elementConfig:{
                type: 'text',
                placeholder: 'YourName'
                },
            validity:{
                requierd:true, 
                VALID:false,
                touched:false           
            },
            value:''
        },
        zipCode: {
            elementType: 'input',
            elementConfig:{
                type: 'text',
                placeholder: 'zip-code'
                },
            validity:{
                requierd:true,
                minLength:5,
                maxLength:5,
                VALID:false,
                touched:false
            },
            value: ''
        },
        country:{
            elementType: 'input',
            elementConfig:{
                type: 'text',
                placeholder: 'YourCountry'
            },
            validity:{
                requierd:true,
                VALID:false,
                touched:false
            },
            value:''
        },
        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Street'},
            validity:{
                requierd:true, 
                VALID:false,
                touched:false 
            },
            value: ''
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'E-mail'
            },
             validity:{
                requierd:true, 
                VALID:false,
                touched:false 
            },
            value: ''
        },
        deliveryMethod: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: 'fastest',displayvalue:'fastest'},
                    {value: 'economic',displayvalue:'economic'}
                ]
            },
            validity:{
                requierd:true, 
                VALID:true,
                touched:false 
            },
            value: 'fastest'
        }
    },
    formIsValid:false,
    loading:false,
}

    validationHandler(value,rules){
        let isValid = false
        if(rules.requierd) {
            isValid = value.trim() !== ''
        }
        if(rules.maxLength && isValid){
                isValid = value.length <= rules.maxLength
        }
        if(rules.minLength && isValid){
            isValid = value.length >= rules.minLength
        }
        return isValid
    }

    orderHandler = () => {
        this.setState({loading:true})
        let formSubmit = {}
        for(let initializer in this.state.orderForm){
            formSubmit[initializer] = this.state.orderForm[initializer].value
        }
        let post = {
            ingredients: this.props.ingredients,
            orderData : formSubmit,
            price: this.props.price
        }
    axiosInstace.post('/order.json',post)
            .then(request => {
                console.log(request)
                this.setState({loading:false})
            })
            .catch(error => {
                console.log(error)
                this.setState({loading:false})
            })
        this.props.history.push('/Orders/')
    }

    inputChangeHandler = (event,initializer) => {
        let updatedForm = {
            ...this.state.orderForm
        }
        let inputOrgenizer = {
            ...updatedForm[initializer]
        }
        inputOrgenizer.value = event.target.value
        inputOrgenizer.validity.VALID = this.validationHandler(event.target.value,inputOrgenizer.validity)
        inputOrgenizer.validity.touched = true
        updatedForm[initializer] = inputOrgenizer

        let formIsValid = true
        for(let initial in updatedForm){
            formIsValid = updatedForm[initial].validity.VALID && formIsValid
        }
        this.setState({orderForm:updatedForm,formIsValid:formIsValid})
    }

    render(){
        let formElementArray = [];
        for(let key in this.state.orderForm){
            formElementArray.push({
                id:key,
                config:this.state.orderForm[key]
            })
        }
        let component
        if(this.state.loading === false){
                component =
            <>
                {formElementArray.map((elem) => {
                    return (
                        <Input 
                        elementType={elem.config.elementType}
                        elementConfig={elem.config.elementConfig}
                        value={elem.config.value}
                        key={elem.id}
                        changed={(event) => this.inputChangeHandler(event,elem.id)}
                        Invalid={!elem.config.validity.VALID}
                        touched={elem.config.validity.touched}
                        disabled={!this.state.formIsValid}
                        />
                    )
                }
            )
        }
            </>
        }else{
            component = <Spinner />
        }

        return(
        <div className={classes.area}>
            { component }
            <Button disabled={!this.state.formIsValid} btnType='Success' clicked = {this.orderHandler}> Order Now </Button>
        </div>
        )
    }
}


export default withRouter(ContactData)