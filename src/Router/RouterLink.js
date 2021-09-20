import React, { Fragment } from 'react'
import {Route, Switch } from 'react-router-dom'
import AboutPage from '../Page/AboutPage'
import AccountPage from '../Page/AccountPage'
import AllProductPage from '../Page/AllProductPage'
import CartPage from '../Page/CartPage'
import ContactPage from '../Page/ContactPage'
import HelpsMorePage from '../Page/HelpsMorePage'
import Home from '../Page/Home'
import ProductDetailsPage from '../Page/ProductDetailsPage'
import CompanyInfoPage from '../Page/CompanyInfoPage'
import TeamPage from '../Page/TeamPage'
import CareerPage from '../Page/CareerPage'
import PrivacyPage from '../Page/PrivacyPage'
import TermsPage from '../Page/TermsPage'
import CheckOutPage from '../Page/CheckOutPage'
import OrderPage from '../Page/OrderPage'
import SareePages from '../Page/SubCategoryPages/Women\'s/SareePages'
import T_ShirtsPage from '../Page/SubCategoryPages/Men\'s/T_ShirtsPages'
import BigPostPages from '../Page/BigPostPages'
import ReturnPolicyPages from '../Page/ReturnPolicyPages'

export default function RouterLink () {

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
                    <Route exact path="/about">
                         <AboutPage />  
                    </Route>
                    <Route exact path="/contact">
                         <ContactPage />  
                    </Route>
                    <Route exact path="/helps_more">
                         <HelpsMorePage />  
                    </Route>
                    <Route exact path="/company_info">
                         <CompanyInfoPage />  
                    </Route>
                    <Route exact path="/team">
                         <TeamPage />  
                    </Route>
                    <Route exact path="/career">
                         <CareerPage />  
                    </Route>
                    <Route exact path="/privacy">
                         <PrivacyPage />  
                    </Route>
                    <Route exact path="/terms">
                         <TermsPage />  
                    </Route>
                    <Route exact path="/checkout">
                         <CheckOutPage />  
                    </Route>
                    <Route exact path="/order">
                         <OrderPage />  
                    </Route>
                    <Route exact path="/saree">
                         <SareePages />  
                    </Route>
                    <Route exact path="/t_shirt">
                         <T_ShirtsPage />  
                    </Route>
                    <Route exact path="/big_post">
                         <BigPostPages />  
                    </Route>
                    <Route exact path="/return_policy">
                         <ReturnPolicyPages />  
                    </Route>
                </Switch>
            </Fragment>
        )
    }

