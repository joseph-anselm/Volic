import { Container, Row, Col } from "react-bootstrap";
import { Carousel, Button, Card } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <>
      <div className="footer">
        <Container fluid>
          <Row>
            <Col className="awards">
              <FontAwesomeIcon icon={faMedal} size="7x" />
              <h2>Winner Brand of the Year</h2>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <h5>Stay in touch</h5>
              <img src="./images/VolicLogo.png" alt="Volic Logo" />

              <p>
                We sincerely value every ideas, suggestions and criticisms, its
                our own way of enhancing on the qulaity of our unique brands.
                reach out to us now!
              </p>
              <form>
                <input
                  type="email"
                  placeholder="Enter Email"
                  required
                  size="17"
                />
                <input type="Submit" className="btn-submit" value="Send" />
              </form>
            </Col>

            <Col sm>
              <h5>Key Products</h5>
              <div className="footer-img">
                <img src="./images/Volic-wipes.jpg" alt="volic diapers" />
                <img
                  src="./images/Volic-Maxi-Diapers.jpg"
                  alt="Volic Diapers"
                />
                <img src="./images/Volic-Midi-Diapers.jpg" alt="Volic Midi" />
                <img src="./images/Volic-baby-Diapers.jpg" alt="Volic mini" />
              </div>
            </Col>

            <Col sm>
              <div className="footer-links">
                <h5>Links</h5>
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Our Products</a>
                  </li>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                  <li>
                    <a href="htpps://webmail.volic.com.ng">Check mail</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col sm>
              <div className="footer-location">
                <h5>Contact Us</h5>
                <p>
                  <b>Headquarters</b>
                </p>
                <p>
                  3A Chief Collins, Lekki Phase 1, Eti Osa Local Government,
                  Lagos, Nigeria.
                </p>
                <p>Customer Service Line: +234 809 212 4097</p>
                <p> Inquires Line: +234 904 938 1538</p>
                <p> info@volic.com.ng</p>
                <Link to="/contact">
                  <Button variant="outline-primary">
                    <span>View Other Branches</span>
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className="copyright">
            <Col className="text-center">
              <p>&copy; Copyright - 2021</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default footer;
