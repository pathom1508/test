import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

function Header() {

    let user = JSON.parse(localStorage.getItem('user-info'))
    const history=useHistory();
    function logOut() {
        localStorage.clear();
        history.push('/register')

    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">E-Comm</Navbar.Brand>
                <Nav className="me-auto navbar_warapper">
                    
                        localStorage.getItem('user-info') ?
                             <>
                                <Link to="/add">Add Product</Link>
                                <Link to="/update">Update Product</Link>
                             </>
                             :
                            <>
                                <Link to="/login">login</Link>
                                <Link to="/register">Register</Link>
                            </>
                    
                </Nav>
                <Nav>
                    <NavDropdown title={user && user.name}>
                        <NavDropdown.Item>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header