import { Jumbotron, Container, Col, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
const Production = () => {
  return (
    <>
      <div>
        <Jumbotron className="text-center jumbo">
          <h1>Production Process Clips</h1>
          <p>
            Few clips from our packaging and production process, we employ top
            quality experts and manufacturers
          </p>

          <Container fluid>
            <Row>
              <Col sm className="production">
                <button href="" data-toggle="modal" data-target="#myModal">
                  <img
                    src="./images/pro1.jpg"
                    class="img-rounded"
                    alt="pro1"
                  ></img>
                  <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            onClick="pause"
                          >
                            &times;
                          </button>
                          <h4 class="modal-title">Close</h4>
                        </div>
                        <div class="modal-body">
                          <p>Clips from Packaging and Production.</p>
                          <ReactPlayer
                            controls
                            width="100%"
                            height="100%"
                            url={[
                              {
                                src: "images/volic-clip1.mp4",
                                type: "video/mp4",
                              },
                            ]}
                          />
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-default"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </Col>

              <Col sm className="production">
                <button href="" data-toggle="modal" data-target="#myModal1">
                  <img
                    src="./images/pro3.jpg"
                    class="img-rounded"
                    alt="pro1"
                  ></img>
                  <div class="modal fade" id="myModal1" role="dialog">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                          >
                            &times;
                          </button>
                          <h4 class="modal-title">Close</h4>
                        </div>
                        <div class="modal-body">
                          <p>Picture shots from Production</p>
                          <ReactPlayer
                            controls
                            width="100%"
                            height="100%"
                            url={[
                              {
                                src: "images/volic-clip2.mp4",
                                type: "video/mp4",
                              },
                            ]}
                          />
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-default"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    </>
  );
};

export default Production;
