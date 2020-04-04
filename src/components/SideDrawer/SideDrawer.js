import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo/Logo'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import BackDrop from '../../components/UI/Backdrop/Backdrop'
import Aux from '../../hoc/Aux'
const SideDrawer = (props) => {

    return(
    <Aux>
    <BackDrop show= {props.open} canceled={props.canceled} />
        <Sidedrawer style={{transform : props.open ? 'translateX(0)' : 'translate(-100%)'}}>
            <Logo  height= '11%'/>
            <nav>
                <NavigationItems />
            </nav>
        </Sidedrawer>
    </Aux>
    )

}

const Sidedrawer = styled.div`
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index:200;
    background-color: white;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out ;
        
    }

    @media ( min-width : 500px) {
        display: none;
    }
`

export default SideDrawer 