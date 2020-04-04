import React,{ Component } from 'react' 
import styled from 'styled-components'
import Aux from '../../../hoc/Aux'
import BackDrop from '../Backdrop/Backdrop'
class ModalPupUp extends Component{
    shouldComponentUpdate(nextProps,nextState) {
        return nextProps.show !== this.props.show
    }
    
    render() {
    return(
        <Aux>
            <BackDrop show = { this.props.show } canceled = {this.props.canceled}/>
            <Modal
                style = {{
                    transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0',
                    backgroundColor: this.props.noBC ? 'rgba(134, 236, 143, 0.001)' : 'white',
                    border: this.props.noBC ? 'none' : '1px solid #ccc',
                    boxShadow: this.props.noBC ? 'none' : '1px 1px 1px black',                    
                }}
            >
            { this.props.children }
            </Modal>
        </Aux>
        
        )
    }
}

const Modal = styled.div`
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 70%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 15%;
    top: 30%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    
    @media (min-width: 600px) {
        width: 500px;
        left: calc(50% - 250px);
}
`

export default ModalPupUp