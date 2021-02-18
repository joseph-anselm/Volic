import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const distributor = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col
            className="text-center distribution-banner animate__animated animate__bounce animate__delay-4s"
            style={{ backgroundImage: "url(./images/volic2.jpg)" }}
          >
            <div>
              <h1>Great Distribution Deals</h1>
              <Link to="/contact">
                <Button color="white" className="is-rounded">
                  <span>Contact us now</span>
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default distributor;
