import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown  } from "react-bootstrap";

export default function NavbarComponent () {
    const [isMini, setIsMini] = useState(false);
    const [isVisible, setVisible] = useState(true);
    useEffect(() => {
      window.addEventListener('load', () => {
        if (window.innerWidth < 930) {
          setIsMini(true);
        }
        else setIsMini(false);
      })
  
      window.addEventListener('resize', () => {
        if (window.innerWidth < 930) {
          setIsMini(true);
        }
        else setIsMini(false);
      })
      document.getElementById('menu').addEventListener('mouseover', () => {
        setVisible(true);
      })
  
      document.getElementById('menu').addEventListener('mouseleave', () => {
        setVisible(false);
      })
    }, [])

    return (
        <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="#home">
            <img src="/img/logo_header_white.png" style={{ width: '250px'}}/>
            </Navbar.Brand>
            <div id="menu">
            <svg className="toggle-button" id="toggle-button" viewBox="0 0 100 80" width="40" height="40" fill="white">
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
            </svg>
            <ul className={`nav-bar ${isVisible ? (isMini ? 'd-grid'  : 'd-flex') : 'none'}`}>
                <li className="nav-li"><a href="/#Why">Why EverRise</a></li>
                <li className="nav-li"><a href="/#BuyBack">BuyBack</a></li>
                <li className="nav-li"><a href="/#Tokenomics">Tokenomics</a></li>
                <li className="nav-li"><a href="/#EcosystemDapps">Ecosystem</a></li>
                <li className="nav-li"><a href="/stats">Stats</a></li>
                <li className="nav-li"><a href="/team">Team</a></li>
            </ul>
            </div>
        </Navbar>
    )
}