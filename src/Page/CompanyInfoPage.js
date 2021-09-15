import React, { Component, Fragment } from 'react'
import TopNavigation from '../Components/TopNavigation/TopNavigation';
import Footer from '../Components/Footer/Footer';
import CompanyInfo from '../Components/CompanyInfo/CompanyInfo';


export default class CompanyInfoPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Company-Info"/>
                <CompanyInfo />
                <Footer />
            </Fragment>
        )
    }
}
