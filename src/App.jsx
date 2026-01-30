import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function App() {
  return (
    <>
      <Navbar className="border-bottom">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="d-flex align-items-center gap-2 fw-bold"
          >
            <img
              src="../src/assets/www.webp"
              alt="Global News Wire Logo"
              className="logo"
            />
            <span>
              Global <span className="red">News</span> Wire
            </span>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet />

      <div className="bg-body text-body text-center py-2 fixed-bottom Layout-text">
        © 2026 Global News Wire
      </div>
    </>
  );
}
