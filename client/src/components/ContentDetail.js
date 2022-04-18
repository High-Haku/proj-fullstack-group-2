import React from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import "./ContentDetail.css";

function ContentDetail() {
  return (
    <div>
      <Container className="bootdey pt-5">
        <section className="panel">
          <Row>
            <Col className="col-md-6">
              <div class="pro-img-details">
                <video
                  src="https://v16-webapp.tiktok.com/375add6057d6f5c8122797aa98ed6440/625d09eb/video/tos/useast2a/tos-useast2a-ve-0068c003/e1ea3805dfef48ceb4988f9d2a89563f/?a=1988&amp;br=2680&amp;bt=1340&amp;cd=0%7C0%7C1%7C0&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=eXd.6Hy2Myq8Z77Rwwe2NVYQml7Gb&amp;l=202204180048160102440261890F54617D&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=ajlnNWt5eTVkeTMzaDczM0ApaDc6Z2c2Zjw7NzZnOTY8ZmcyajI1ZjZqY19fLS1iMTZzc180Mi5hY2FjNS01NTQ2XzY6Yw%3D%3D&amp;vl=&amp;vr="
                  playsinline=""
                  autoplay=""
                ></video>
              </div>
            </Col>
            <Col className="col-md-6">
              <h1>Project Title</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Age
                nunc isti doceant, vel tu potius quis enim ista melius? Duo enim
                genera quae erant, fecit tria. Te enim iudicem aequum puto, modo
                quae dicat ille bene noris. Idemne potest esse dies saepius, qui
                semel fuit?{" "}
              </p>
              <div className="mt-3">
                <Button style={{ marginLeft: 20 }}>Like</Button>
                <Button style={{ marginLeft: 20 }}>Share</Button>
                <Button className="btn-pitch" style={{ marginLeft: 20 }}>
                  Pitch
                </Button>
              </div>
              <Form className="mt-5">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Comment</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Input your comment" />
                </Form.Group>
              </Form>
              <Button className="btn-send">Send</Button>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default ContentDetail;
