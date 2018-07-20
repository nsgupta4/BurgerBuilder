import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ContactData from '../Checkout/ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
//import * as actions from '../../store/actions/index';

class Checkout extends Component {
   
   /* componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries()){
            if(param[0] === 'price'){
                price = param[1];                
            }else{
                ingredients[param[0]]= + param[1]; 
            }
        }
        this.setState({ingredients:ingredients,totalPrice:price});
    } */
    //componentWillMount(){
   //     this.props.onInitPurchase();
    //}
    checkoutCancelledHandler = () =>{
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () =>{
        this.props.history.replace('/checkout/contact-data');
    }
    render(){
        let summary = <Redirect to="/"/>
        if(this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null 
            summary = (
                <div>
                {purchasedRedirect}
                <CheckoutSummary 
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
            ingredients={this.props.ings}/>
            <Route 
            path={this.props.match.path + '/contact-data'} 
            //render={(props)=> (
              //  <ContactData 
                //ingredients={this.state.ingredients} 
                //price={this.state.totalPrice} {...props} />
           // )} 
           component={ContactData}/>
           </div>
            );
        }
        return summary;
    }
}
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased,
    };
};
//const mapDispatchToProps = dispatch => {
//    return {
//        onInitPurchase : () => dispatch(actions.purchaseInit()),
//    }
//}

export default connect(mapStateToProps)( Checkout );