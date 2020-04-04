import React ,{ Component } from 'react'
import Order from '../../Order/order'
import axiosInstance from '../../../axios-order'
import {Route} from 'react-router-dom'

class Orders extends Component {
    state = {
        order:[],
        loading:true,
    }
    componentDidMount(){
        axiosInstance.get('/order.json')
            .then(res => {
                this.setState({loading:false})
                console.log(res.data)
                const fetchedData = []
                for(let i in res.data){
                    fetchedData.push({...res.data[i],id:i})
                }
                this.setState({order:fetchedData})
            })
            .catch(err => {
                this.setState({loading:false})
            })
    }
    render() {
        return(
            <Route>
                <div>
                    {this.state.order.map(ord => {
                        return(
                            <Order key={ord.id} ingredients={ord.ingredients} price={+ord.totalprice} />
                        )
                    })}
                </div>
            </Route>
            
        )
    }
}
export default Orders 