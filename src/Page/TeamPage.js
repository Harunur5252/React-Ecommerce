import React, { Component, Fragment } from 'react'
import Team from '../Components/Team/Team';
import Footer from '../Components/Footer/Footer'
import TopNavigation from '../Components/TopNavigation/TopNavigation'

export default class TeamPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Team"/>
                <Team />
                <Footer />
            </Fragment>
        )
    }
}
