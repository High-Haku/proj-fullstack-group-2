import React, { useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";
import "./ContentDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/support/${content.data._id}`)
  }

  useEffect(() => {
    dispatch(getSingleContent(id));
  }, [dispatch]);

  if (content.data) {
    return (
      <div>
        <Container className="content-container border-end">
          <Row className="row-col-md-1">
            <Col
              id="left-col"
              className="col-md col-xs justify-content-center sticky-top"
            >
              <Col id="vid-container" className="col-md-8 pt-1">
                <video src={content.data.video} controls muted />
              </Col>
            </Col>
            <Col id="right-col" className="col-md col-xs order-third mt-4">
              <h1 style={{ color: "272727" }}>{content.data.title}</h1>
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
                  <Link
                    style={{ color: "white" }}
                    to={`/support/${content.data._id}`}
                  >
                    <DollarCircleFilled className="p-2" />
                  </Link>
                </Button>
              </div>
              <hr />
              <div>
                <label className="p-1" style={{ fontWeight: "bold" }}>
                  Goals Rp. 5.000.000
                </label>
                <ProgressBar
                  completed={64}
                  customLabel={ProgressBar.completed}
                  // maxCompleted={5000000}
                  bgColor="#F1D00A"
                  baseBgColor="#21325E"
                  labelColor="#21325E"
                />
              </div>
              <hr />
              <Row>
                {content.data.reward === undefined
                  ? null
                  : content.data.reward.map((item) => {
                      return (
                        <div className="col-4 mb-4" key={item.id}>
                          <div
                            id="card-container2"
                            className="card card1 h-100"
                            onClick={handleClick}
                          >
                            <div className="card-body">
                              <p
                                style={{
                                  fontSize: "20px",
                                  fontWeight: "bold",
                                }}
                              >
                                {item.name}
                              </p>
                              <span className="h3">{item.price}</span>IDR
                              <br />
                            </div>
                          </div>
                        </div>
                      );
                    })}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div id="overlay-loader">
        <div id="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default ContentDetail;
