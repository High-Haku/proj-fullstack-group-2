import React, { useEffect } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import "./ContentDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleContent } from '../redux/actions/contentsActions';

function ContentDetail() {
  const { id } = useParams();
  const content = useSelector(state => state.contents);
  const dispatch = useDispatch();
  console.log(content);

  useEffect(() => {
    dispatch(getSingleContent(id));
  });

  if (content.data) {
    return (
      <div>
        <Container className="bootdey mt-5">
          <Row className="row-cols-8">
            <Col id="left-col" className="col-md-5">
              <video src={content.data && content.data.video} controls muted />
            </Col>
            <Col id="mid-col">
              <div id="btn-group" className="col-md-1 order-second">
                <Button className="mb-2">Like</Button>
                <Button className="mb-2">Share</Button>
                <Button className="mb-2">
                  <Link to={`/support/${content.data._id}`}> Pitch </Link></Button>
              </div>
            </Col>
            <Col id="right-col" className="col-md-6 order-third">
              <h1>{content.data.title}</h1>
              <br />
              <p>{content.data.description}</p>
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
    )
  } else {
    return (
      <>
        <h1>Loading</h1>
      </>
    )
  }
}

export default ContentDetail;