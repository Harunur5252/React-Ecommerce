import React, { Component, Fragment } from 'react'
import Footer from '../../../Components/Footer/Footer';
import T_Shirts from '../../../Components/SubCategoryComponents/Men\'s/T_Shirts/T_Shirts';
import TopNavigation from '../../../Components/TopNavigation/TopNavigation';


export default class T_ShirtsPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                <TopNavigation title="T_Shirts"/>
                <T_Shirts />
                <Footer />
            </Fragment>
        )
    }
}
