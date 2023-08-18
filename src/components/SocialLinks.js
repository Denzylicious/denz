import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Nav.Link href="https://github.com/Denzylicious">
        <FaGithub />
      </Nav.Link>
      <Nav.Link href="https://www.facebook.com/profile.php?id=100008511368610">
        <FaFacebook />
      </Nav.Link>
      <Nav.Link href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fdefinitelynotdenz%2F%3Ffbclid%3DIwAR3XXpTidJ3zNqBslMf2lFCd0nDiDIQrHKjINPlVYEii-dzBZdW7U1LeeJY&h=AT068pyFkb500g5wFdHnRzZNuEYqX4wCq2CY3mv4BfRdIR-DjOfON8xk2eKFgARsW8VpeZEse95ieP5t5BZiiErhl9p-IJoa3y_UXgkICGaQ3mw4GIstQFqjinIVHvCpVh8fuQ">
        <FaInstagram />
      </Nav.Link>
    </div>
  );
};

export default SocialLinks;