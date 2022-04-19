import React from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import "./ContentDetail.css";
import VideoPlayerFunction from "../Config/CloudinaryVideoPLayer";

function ContentDetail() {
  const videoOptions = {
    cloudName: "jovitoaddo",
    publicId: "cptvg3z5b5mcjs1gquap",
  };

  return (
    <div>
      <Container className="bootdey mt-5">
        <Row className="row-cols-8">
          <Col id="left-col" className="col-md-5">
            <VideoPlayerFunction className="vid" options={videoOptions} />
          </Col>
          <Col id="mid-col">
            <div id="btn-group" className="col-md-1 order-second">
              <Button className="mb-2">Like</Button>
              <Button className="mb-2">Share</Button>
              <Button className="mb-2">Pitch</Button>
            </div>
          </Col>
          <Col id="right-col" className="col-md-6 order-third">
            <h1>Project Title</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Age nunc
              isti doceant, vel tu potius quis enim ista melius? Duo enim genera
              quae erant, fecit tria. Te enim iudicem aequum puto, modo quae
              dicat ille bene noris. Idemne potest esse dies saepius, qui semel
              fuit?{" "}
            </p>
            <Form className="mt-5">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  id="comment-box"
                  as="textarea"
                  rows={3}
                  placeholder="Input your comment"
                />
              </Form.Group>
            </Form>
            <Button className="btn-send">Send</Button>
            <br />
            <br />
            <br />
            <h4>Comments Section :</h4>
            <br />
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContentDetail;
