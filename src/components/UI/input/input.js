import React from "react";
import classes from './input.module.css'
const Input = (props) => {

    let inputElement = null;
    let inputClasses = [classes.inputElement ,classes.Input]
    if(props.Invalid && props.touched){
        inputClasses.push(classes.Invalid) 
    }
    switch(props.elementType){
        case ( 'input' ):
        inputElement = <input
         className={inputClasses.join(' ')}
         type={props.elementConfig.type}
         placeholder={props.elementConfig.placeholder} 
         value={props.value}
         onChange={props.changed} />
        break;

        case ( 'textarea' ):
        inputElement = <textarea
         className={inputClasses.join(' ')}
         type={props.elementConfig.type}
         placeholder={props.elementConfig.placeholder} 
         value={props.value}
         onChange={props.changed} />
        break;

        case ( 'select' ):
        inputElement = 
        <select
         className={inputClasses.join(' ')}
         value={props.value}
         onChange={props.changed}>
            {props.elementConfig.options.map((opt)=> {
                return(
                <option value={opt.value}>{opt.displayvalue}</option> 
                    )
                }
            )
        }
        </select>
        break;

        default:
        inputElement = 
        <input 
        className={inputClasses.join(' ')}
        {...props.elementConfig} 
        value={props.value} 
        onChange={props.changed}/>
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}
export default Input