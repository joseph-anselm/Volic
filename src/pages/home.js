import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import { Carousel, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div>
      <Carousel className="home-carousel">
        <Carousel.Item interval={2000}>
          <img
            className="d-block carousel-img"
            src="./images/volic-head.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Volic Quality Baby Diapers</h1>
            <h6>Designed with topnotch quality & Standards</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel-img"
            src="./images/volic1.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Most Preferred Choice</h1>
            <h6>First Mothers most preferred choice</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="./images/volic2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 className="animate__animated animate__bounce animate__delay-2s">
              Fresh and Clean
            </h1>
            <h6 className="animate__animated animate__bounce animate__delay-4s">
              Our Products keeps your baby clean and fresh all day
            </h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>
        <Jumbotron className="text-center jumbo animate__animated animate__bounce animate__delay-5s">
          <h1>Our Products Brands</h1>
          <p>
            We have various range of our Award winning products brands, Tailored
            with uniqueness, quality and baby friendliness.
          </p>
          <p></p>
          <div className="card-products">
            <Container fluid>
              <Row>
                <Col sm>
                  <Card style={{ width: "15rem" }}>
                    <Card.Img
                      variant="top"
                      src="./images/Volic-baby-Diapers.jpg"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h2>Volic Baby Diapers | Mini</h2>
                      </Card.Title>
                      <Card.Text></Card.Text>
                      <Link to="/products">
                        <Button variant="outline-primary">
                          <span>More Product Info</span>
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm>
                  <Card style={{ width: "15rem" }}>
                    <Card.Img
                      variant="top"
                      src="./images/Volic-Midi-Diapers.jpg"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h2>Volic Baby Diapers | Midi</h2>
                      </Card.Title>
                      <Card.Text></Card.Text>
                      <Link to="/products">
                        <Button variant="outline-primary">
                          <span>More Product Info</span>
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm>
                  <Card style={{ width: "15rem" }}>
                    <Card.Img
                      variant="top"
                      src="./images/Volic-Maxi-Diapers.jpg"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h2>Volic Baby Diapers | Maxi </h2>{" "}
                      </Card.Title>
                      <Card.Text></Card.Text>
                      <Link to="/products">
                        <Button variant="outline-primary">
                          <span>More Product Info</span>
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm>
                  <Card style={{ width: "15rem" }}>
                    <Card.Img variant="top" src="./images/Volic-wipes.jpg" />
                    <Card.Body>
                      <Card.Title>
                        <h2>Volic Baby Diapers | wipes</h2>
                      </Card.Title>
                      <Card.Text></Card.Text>
                      <Link to="/products">
                        <Button variant="outline-primary">
                          <span>More Product Info</span>
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Jumbotron>
      </div>
    </div>
  );
};

export default home;
