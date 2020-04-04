import React from 'react'
import styled from 'styled-components'
import Aux from '../../hoc/Aux'
import Toolbar from '../Navigation/ToolBar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'

class Layout extends React.Component {
    state = {
        showSideDrawer:true,
    }
    SideDrawerHandler = () => {
        this.setState({showSideDrawer:!this.state.showSideDrawer})
    }


    render(){
        return(
            <Aux>
                <Toolbar canceled ={this.SideDrawerHandler} />
                <SideDrawer open={this.state.showSideDrawer} canceled={this.SideDrawerHandler} />
                <MainDiv >{ this.props.children }</MainDiv>
            </Aux>
   
        )
    }
    
}
const MainDiv = styled.div`
    margin:72px;

`
export default Layout