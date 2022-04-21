import "./Contents.css";
import React, { useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  NavLink,
  Card,
  Navbar,
} from "react-bootstrap";
import { getAllContents } from "../redux/actions/contentsActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReadFilled, InteractionFilled, LikeFilled } from "@ant-design/icons";

function Contents() {
  const dispatch = useDispatch();
  const { contents } = useSelector((state) => state.contents);
  console.log(contents);

  useEffect(() => {
    dispatch(getAllContents());
  }, [dispatch]);

  if (contents.length > 0) {
    return (
      <div>
        <Container fluid style={{}}>
          <Row className="d-flex">
              <Col id="divBorder" lg={8} style={{}} className="">
                {contents.map((content) => {
                  return (
                    <Row key={content._id}>
                      <Col className="d-flex justify-content-center pt-4">
                        <Card style={{ width: "25em", borderColor: "white" }}>
                          <Card.Title className="d-flex align-items-center">
                            <Navbar.Brand
                              className="d-flex align-items-center"
                              href="/profile"
                            >
                              <img
                                alt=""
                                src="https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png"
                                width="45"
                                height="45"
                                className="d-inline-block align-top"
                                style={{ borderRadius: "50%" }}
                              />
                              <p
                                className="my-0 p-2"
                                style={{ color: "#272727" }}
                              >
                                {content.userID.name}
                              </p>
                            </Navbar.Brand>
                          </Card.Title>
                          <Card.Body className="text-center">
                            <div id="vid-container">
                              <video src={content.video} controls muted />
                            </div>
                            <Button
                              variant="outline-warning"
                              className="btn-contentpage mx-2"
                            >
                              <LikeFilled className="p-2" />
                            </Button>
                            <Button
                              variant="outline-warning"
                              className="btn-contentpage mx-2"
                            >
                              <InteractionFilled className="p-2" />
                            </Button>
                            <Button
                              variant="outline-warning"
                              className="btn-contentpage mx-2"
                            >
                              <Link
                                style={{ color: "white" }}
                                to={`/contents/${content._id}`}
                              >
                                <ReadFilled className="p-2" />
                              </Link>
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  );
                })}
                <Col />
              </Col>
            <Col
              lg={4}
              style={{
                height: "600px",
                borderStyle: "solid",
                borderColor: "#41548a",
                borderWidth: "0px",
                // boxShadow: "10px 10px 10px 10px #888888",
                backgroundColor: "white",
              }}
              className="rounded d-flex justify-content-center sticky-top overflow-auto"
            >
              <Row id="divSide">
                <Col className="d-flex p-5 justify-content-center">
                  <Button
                    variant="outline-warning"
                    className="rounded-pill mx-2"
                  >
                    LOGIN
                  </Button>
                  <Button
                    variant="outline-warning"
                    className="rounded-pill mx-2"
                  >
                    REGISTER
                  </Button>
                  <Button
                    variant="outline-warning"
                    className="rounded-pill mx-2"
                  >
                    POST
                  </Button>
                </Col>
                <h1 className="d-flex" style={{ fontSize: "30px" }}>
                  CATEGORY
                </h1>
                <NavLink
                  className="d-flex ps-5"
                  to="/kreativitas"
                  style={{ color: "green", fontSize: "20px" }}
                >
                  #Creativity
                </NavLink>
                <NavLink
                  className="d-flex ps-5"
                  to="/barang-seharian"
                  style={{ color: "blue", fontSize: "20px" }}
                >
                  #Daily Goods
                </NavLink>

                <Col className="py-5">
                  <h3>Trending</h3>
                  <h5>
                    <ul>
                      <li>1. unique product for daily use</li>
                      <li>2. lifehacks 101</li>
                      <li>3. ultra soft toothbrush with micro nano bristles | Easy Life </li>
                    </ul>
                  </h5>

                  <h3>
                    Check out our latest videos!
                  </h3>
                </Col>
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

export default Contents;
