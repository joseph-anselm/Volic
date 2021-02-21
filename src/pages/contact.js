import {
  Carousel,
  Button,
  Card,
  Jumbotron,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";
export default function contact() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm>
            <div>
              <Form
                data-netlify="true"
                name="volic-contact"
                method="POST"
                className="form-control-sm"
              >
                <input type="hidden" name="form-name" value="volic-contact" />
                <h5>Reach out to us</h5>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    size
                    required
                    name="mail"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlSelect1">Product option</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    name="products"
                  >
                    <option name="mini">Volic Mini</option>
                    <option name="midi">Volic Midi </option>
                    <option name="maxi">Volic Maxi</option>
                  </select>
                </div>

                <div class="form-group">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="subject"
                    required
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary mb-2">
                  Send Now
                </button>
              </Form>
            </div>
          </Col>
          <Col sm>
            <Carousel className="contact-carousel">
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="./images/volic-maxi-diapers.jpg"
                  alt="First slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src="./images/volic-baby-diapers.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./images/volic-midi-diapers.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="locations">
          <Col sm>
            <h5>Headquarters</h5>
            <p>
              <b>
                #3A, Chief Collins Street. Lekki Phse-1. Eti-Osa LGA Lagos
                State-Nigeria.
              </b>
            </p>
            <p>Customer Service Line: +234 809 212 4097</p>
            <p> Inquiries Line: +234 904 938 1538</p>
            <p> info@volic.com.ng</p>
          </Col>
          <Col sm>
            <h5>Enugu Depot</h5>
            <p>
              <b>
                Swissgarde Plaza Shop 011/025, 45 Ogui Road Enugu Enugu State.
              </b>
            </p>
            <p>Customer Service Line: +234 902 837 0791</p>
            <p>Inquiries Line:+234 701 043 6808 </p>
            <p>Email:Enugu.depot@volic.com.ng</p>
          </Col>
          <Col sm>
            <h5>Awka Depot</h5>
            <p>
              <b>
                {" "}
                Millennium Plaza Shop No.A13/A14 opposite Total Filling Station
                before Aroma Junction Awka-Anambra State.
              </b>
            </p>
            <p>Customer Service Line: +234 816 609 0404</p>
            <p>Inquiries Line: +234 814 254 3199</p>
            <p>Email:awka.depot@volic.com.ng</p>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6265913253583!2d3.473214513809943!3d6.441972025895301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf44b8f4b5f5d%3A0x5690ae334a33e03!2s3a%20Chief%20Collins%20Uchidiuno%20St%2C%20Lekki%20Phase%20I%2C%20Lagos!5e0!3m2!1sen!2sng!4v1613502660644!5m2!1sen!2sng"
          width="100%"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </Container>
    </div>
  );
}
