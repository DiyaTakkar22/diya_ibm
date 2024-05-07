// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const Menubar = () => {

//     const loginStatus = useSelector(store => store.user.loginStatus);

//     if (loginStatus) {
//         return (
//             <>
//                 <ul>
//                     <li> <Link to={'/'}>Home</Link> </li>
//                     <li> <Link to={'/emp'}>Employee</Link> </li>
//                     <li> <Link to={'/parent'}>Parent</Link> </li>
//                     <li> <Link to={'/logout'}>Logout</Link>`` </li>
//                 </ul>
//             </>
//         );
//     }
//     else {
//         return (
//             <>
//                 <ul>
//                     <li> <Link to={'/'}>Home</Link> </li>
//                     <li> <Link to={'/register'}>Register</Link> </li>
//                     <li> <Link to={'/login'}>Login</Link> </li>
//                 </ul>
//             </>
//         );
//     }
// };

// export default Menubar;

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav } from 'react-bootstrap'; // Import Navbar components from Bootstrap

const Menubar = () => {
    const loginStatus = useSelector(store => store.user.loginStatus);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/">Your Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    {loginStatus ? (
                        <>
                            <Nav.Link as={Link} to="/emp">Employee</Nav.Link>
                            <Nav.Link as={Link} to="/parent">Parent</Nav.Link>
                            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Menubar;


