import React,{Component} from 'react'
import Modal from '../components/UI/Modal/Modal'
import Aux from './Aux'
const withErrorHandler = (WrappedComponent, axiosInstace) => {
    return class extends Component {
        state= {
            error:null
        }
        componentWillMount() {
            this.resInterceptor.axiosInstace.interceptors.response.use(req =>  {
                this.setState({error:null})
                return req
            })
            this.reqInterceptor.axiosInstace.interceptors.response.use(req =>req,error =>{
                this.setState({error:error})
            })
        }
        componentWillUnmount() {
            axiosInstace.interceptors.request.eject(this.reqInterceptor);
            axiosInstace.interceptors.respond.eject(this.resInterceptor);
        }
        
        errorConfirmed = () => {
            this.setState({error:null})
        }
        render() {
            return(
            <Aux>
                    <Modal show = {this.state.error ? true : false} canceled = {this.errorConfirmed }>
                        {this.state.error? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent  {...this.props}/>
            </Aux>
        )
        }
    }
}

export default withErrorHandler