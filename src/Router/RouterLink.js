import React, { Component, Fragment } from 'react'
import {Route, Switch } from 'react-router-dom'
import AccountPage from '../Page/AccountPage'
import AllProductPage from '../Page/AllProductPage'
import CartPage from '../Page/CartPage'
import Home from '../Page/Home'
import ProductDetailsPage from '../Page/ProductDetailsPage'

export default class RouterLink extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/">
                         <Home />  
                    </Route>
                    <Route exact path="/products">
                         <AllProductPage />  
                    </Route>
                    <Route exact path="/productDetails/:productId/:productName">
                        <ProductDetailsPage />
                    </Route>
                    <Route exact path="/cart">
                         <CartPage />  
                    </Route>
                    <Route exact path="/account">
                         <AccountPage />  
                    </Route>
                </Switch>
            </Fragment>
        )
    }
}
