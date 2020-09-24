import React, {Component} from 'react'
import './Header.css'

export default class Header extends Component{
    constructor(){
        super();
        this.state = {
            menu: false
        }
    }

    slide = () =>{
        this.setState({menu: !this.state.menu})
    }


    render(){
        return(
            <div className="header">
                <nav className="phone-header"> 
                    <h1 className="title">
                        <a href="#">*LOGO*</a>
                        </h1>
                    <div className="navbar-icon" onClick={this.slide}>MENU &#9776;</div>
                    <div className="navbar-menu">
                        <a href="#">SERVICES</a>
                        <a href="#">PORTFOLIO</a>
                        <a href="#">ABOUT</a>
                        <a href="#">TEAM</a>
                        <a href="#" className="contact">CONTACT</a>
                    </div>
                </nav>
                <h2 className="top-text">Welcome to the start of your fitness journey</h2>
                <h1 className="top-text2">CLICK HERE TO GET STARTED</h1>
                <button className="join-us">CONTACT US</button>

                {/* slide out menu */}
                <div className={this.state.menu ? 'menu slide' : 'menu'}>
                        <a href="#">SERVICES</a>
                        <a href="#">PORTFOLIO</a>
                        <a href="#">ABOUT</a>
                        <a href="#">TEAM</a>
                        <a href="#">CONTACT</a>
                </div>
            </div>
        )
    }
}