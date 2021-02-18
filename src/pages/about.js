import { Container, Row, Col } from "react-bootstrap";
import {
  faAward,
  faUserShield,
  faDollarSign,
  faStar,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm className="text-center">
            <div className="icon">
              <FontAwesomeIcon icon={faStar} size="5x" />
              <h5>Quality</h5>
              <p>
                We uphold strong material quality when making our products,
                always maintaining standards.
              </p>
            </div>
          </Col>
          <Col sm className="text-center">
            <div className="icon">
              <FontAwesomeIcon icon={faDollarSign} size="5x" />
              <h5>Cost Value</h5>
              <p>
                For every amouunt spent in our product purchase, you get more
                value to your satisfactions at all times.
              </p>
            </div>
          </Col>
          <Col sm className="text-center">
            <div className="icon">
              <FontAwesomeIcon icon={faUserShield} size="5x" />
              <h5>Safety</h5>
              <p>
                Our Manufacturing team are dedicated to ensuring safety in our
                product designs and materials used
              </p>
            </div>
          </Col>
          <Col sm className="text-center">
            <div className="icon">
              <FontAwesomeIcon icon={faSyncAlt} size="5x" />
              <h5>Consitency</h5>
              <p>
                Ensuring cosnsitency in a our product quality and design is the
                core of our business. we don't compromise our standards{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md>
            <p className="text-center">
              <ul className="about-list">
                <li>
                  <h3>Safe</h3>
                </li>
                <li>
                  <h3>Quality</h3>
                </li>
                <li>
                  <h3>Affordable</h3>
                </li>
                <li>
                  <h3>Topnotch Design</h3>
                </li>
                <li>
                  <h3>Reliable</h3>
                </li>
              </ul>
            </p>
          </Col>

          <Col md>
            <p className="text-center">
              <img
                src="./images/Volic-baby-diapers.jpg"
                alt=""
                height="300px"
              />
            </p>
          </Col>
        </Row>
        <Row>
          <p claasName="about-text">
            <b>
              " Since inception for over 10 years, we have decided to be
              commited to ensuring production of quality Baby Diapers. Our
              multiple award winning brands distributes Predominantly in Nigeria
              and several African Countries. Our cores values has been a guiding
              light keeping us ahead in our continous effort towards ensuring a
              safe, clean and always fresh atmosphere for your baby.
            </b>
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default About;
