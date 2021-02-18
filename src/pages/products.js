import {
  Carousel,
  Button,
  Card,
  Jumbotron,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div className="card-products">
      <Jumbotron className="text-center jumbo">
        <h1>Our Products Brands</h1>
        <p>
          We have various ranges of our Award winning products brands, Tailored
          with uniqueness, quality and baby friendly
        </p>

        <Container fluid>
          <Row>
            <Col sm>
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src="./images/Volic-baby-Diapers.jpg" />
                <Card.Body>
                  <Card.Title>Volic Mini Diapers</Card.Title>
                  <Card.Text>
                    <p>
                      <b>
                        Volic Mini Diapers is gentle on your baby, designed with
                        uniqueness.
                      </b>
                    </p>
                    <p>52 pieces Quality Diapers</p>
                    <p>Size: 3-6kg Mini</p>
                  </Card.Text>
                  <Link to="/contact">
                    <Button variant="outline-primary">
                      <span>View Other Branches</span>
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src="./images/Volic-Midi-Diapers.jpg" />
                <Card.Body>
                  <Card.Title>Volic Midi Diapers</Card.Title>
                  <Card.Text>
                    <p>
                      <b>
                        Volic Midi Diapers is mild and tender on baby, crafted
                        for comfort and controlled leakage .
                      </b>
                    </p>
                    <p>50 pieces Quality Diapers</p>
                    <p>Size: 5-11kg Midi</p>
                  </Card.Text>
                  <Link to="/contact">
                    <Button variant="outline-primary">
                      <span>View Other Branches</span>
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src="./images/Volic-Maxi-Diapers.jpg" />
                <Card.Body>
                  <Card.Title>Volic Maxi Diaper</Card.Title>
                  <Card.Text>
                    <p>
                      <b>
                        Volic Maxi Diapers is a quality products for comfort,
                        all Volic product gives best value for money.
                      </b>
                    </p>
                    <p>48 pieces Quality Diapers</p>
                    <p>Size: 9-13kg Maxi</p>
                  </Card.Text>
                  <Link to="/contact">
                    <Button variant="outline-primary">
                      <span>View Other Branches</span>
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src="./images/Volic-wipes.jpg" />
                <Card.Body>
                  <Card.Title>Volic Wipes</Card.Title>
                  <Card.Text>
                    <p>
                      <b>
                        With gentle perfume, Volic wipes is sure to give that
                        fresh and clean feel always.
                      </b>
                    </p>
                    <p>150 pieces Quality wipes</p>
                    <p>Top grade material</p>
                  </Card.Text>
                  <Link to="/contact">
                    <Button variant="outline-primary">
                      <span>View Other Branches</span>
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Products;
