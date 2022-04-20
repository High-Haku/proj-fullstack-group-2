import React, { useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./ContentDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleContent } from "../redux/actions/contentsActions";
import {
  DollarCircleFilled,
  InteractionFilled,
  LikeFilled,
} from "@ant-design/icons";

function ContentDetail() {
  const { id } = useParams();
  const content = useSelector((state) => state.contents);
  const dispatch = useDispatch();
  console.log(content);

  useEffect(() => {
    dispatch(getSingleContent(id));
  });

  if (content.data) {
    return (
      <div>
        <Container className="content-container">
          <Row className="row-col-md-1">
            <Col id="left-col" className="col-md col-xs justify-content-center">
              <Col className="col-md-7 pt-5 pb-5">
                <video
                  src={content.data && content.data.video}
                  controls
                  muted
                />
              </Col>
            </Col>
            <Col id="right-col" className="col-md col-xs order-third mt-4">
              <h1>{content.data.title}</h1>
              <hr />
              <p>{content.data.description}</p>
              <div id="btn-group" className="order-second">
                <Button variant="outline-warning" className="btn-contentd mx-2">
                  <LikeFilled className="p-2" />
                </Button>
                <Button variant="outline-warning" className="btn-contentd mx-2">
                  <InteractionFilled className="p-2" />
                </Button>
                <Button variant="outline-warning" className="btn-contentd mx-2">
                  <Link to={`/support/${content.data._id}`}>
                    <DollarCircleFilled className="p-2" />
                  </Link>
                </Button>
              </div>
              <hr />
              <Row>
                <Col className="support-info">
                  <h3>Support 1</h3>
                </Col>
                <Col className="support-info">
                  <h3>Support 1</h3>
                </Col>
                <Col className="support-info">
                  <h3>Support 1</h3>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  }
}

export default ContentDetail;