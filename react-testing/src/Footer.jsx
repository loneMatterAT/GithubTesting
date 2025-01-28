import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-footer-tertiary">
        <Container>
          <i className='dev-name'>© 2024 Created by: JBG</i>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Footer;