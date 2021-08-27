import { Component } from "react";
import {Nav, Navbar, Dropdown, Form, FormControl} from "react-bootstrap"

class NetflixNavbar extends Component{
    render() {
        return(
            <div className="margins">
            <Navbar className="NetflixNav"expand="lg">
                <Navbar.Brand href="#home"><img src="assets/netflix_logo.png" height="50"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link className="text-white" href="#home">Home</Nav.Link>
                    <Nav.Link className="text-white" href="#home">TV Shows</Nav.Link>
                    <Nav.Link className="text-white" href="#home">Movies</Nav.Link>
                    <Nav.Link className="text-white" href="#home">Recently Added</Nav.Link>
                    <Nav.Link className="text-white" href="#link">My List</Nav.Link>
                    </Nav>
                    <Dropdown className="Transparent">
                    <Dropdown.Toggle className="Transparent" id="dropdown-basic">
                        <img src="assets\icons\search-13-48.png" height="24"/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><Form inline>
                        <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
                    </Form></Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}

export default NetflixNavbar