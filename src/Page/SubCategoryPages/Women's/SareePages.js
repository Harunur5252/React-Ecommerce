import React, { Component, Fragment } from 'react'
import Footer from '../../../Components/Footer/Footer';
import Saree from '../../../Components/SubCategoryComponents/Women\'s/Saree/Saree';
import TopNavigation from '../../../Components/TopNavigation/TopNavigation';


export default class SareePages extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Saree"/>
                <Saree />
                <Footer />
            </Fragment>
        )
    }
}
