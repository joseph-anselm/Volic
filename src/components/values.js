import { Container, Row, Col, Button } from "react-bootstrap";
const Values = () => {
  return (
    <div>
      <Container fluid className="values">
        <Row>
          <Col sm className="text-center values-core">
            <div>
              <h5>Essential Product features</h5>
              <ul>
                <li>Mild and Tender Skin Touch</li>
                <li>Adaptable leakage prevention</li>
                <li>Instant Soaking up</li>
                <li>Comfortable Elastic for fitness</li>
                <li>exceptional protection for Belly button </li>
                <li>Soft organic fragrance to mask odour</li>
              </ul>
            </div>
          </Col>
          <Col sm className="values-img values-core">
            <img src="./images/Diapers-values.png" alt="" />
          </Col>
          <Col sm className="text-center values-core">
            <div>
              <h5>Our Core Values</h5>
              <ul>
                <li>Integrity</li>
                <li>Quality</li>
                <li>Professionalism</li>
                <li>Strong Focus</li>
                <li>Excellence</li>
                <li>Dedication</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Values;
