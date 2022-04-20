import "./Contents.css";
import React, { useEffect } from "react";
import { Container, Col, Row, Button, NavLink } from "react-bootstrap";
import CloudinaryUploadWidget from "../Config/CloudinaryUploadWidget";
import { getAllContents } from "../redux/actions/contentsActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: 3,
    }}
  />
);

function Contents() {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.contents);

  useEffect(() => {
    dispatch(getAllContents());
  }, [dispatch]);

  return (
    <div>
      <Container fluid style={{}}>
        <Row className="pt-5 d-flex text-center">
          <Col />
          {contents.data === undefined ? null 
          : <Col id="divBorder" lg={7} style={{}} className="">
            {contents.data.map(content => {
              return (
                <Row key={content._id}>
                  <Row >
                    <Col>
                      <video src={content.video} controls muted />
                    </Col>
                    <Col>
                      <Button style={{ position: "relative", top: "700px" }}>
                        Like
                      </Button>
                      <Button style={{ position: "relative", top: "700px" }}>
                        <Link to={`/contents/${content._id}`}> Detail </Link>
                      </Button>
                      <Button style={{ position: "relative", top: "700px" }}>
                        Share
                      </Button>
                    </Col>
                  </Row>
                  <ColoredLine color="grey" />
                </Row>
              )
            })}
            <Col />
          </Col>}
          <Col />
          <Col
            lg={3}
            style={{
              height: "600px",
              borderStyle: "solid",
              borderColor: "#41548a",
              borderWidth: "0px",
              // boxShadow: "10px 10px 10px 10px #888888",
              backgroundColor: "white",
            }}
            className="rounded d-flex justify-content-center sticky-top pt-5 overflow-auto"
          >
            <Row style={{ height: "20px" }}>
              <Col
                id="divSide"
                className="d-flex justify-content-center p-5"
                style={{ backgroundColor: "#41548a" }}
              >
                <Button
                  className="rounded-pill"
                  style={{
                    backgroundColor: "white",
                    color: "gray",
                    borderColor: "white",
                  }}
                >
                  LOGIN
                </Button>
                <Col />

                <Button
                  className="rounded-pill"
                  style={{
                    backgroundColor: "white",
                    color: "gray",
                    borderColor: "white",
                  }}
                >
                  REGISTER
                </Button>

                <Col />
                <CloudinaryUploadWidget />
              </Col>

              <ColoredLine color="grey" />
              <h1
                className="d-flex justify-content-center"
                style={{ fontSize: "50px" }}
              >
                CATEGORY
              </h1>

              <NavLink
                className="d-flex justify-content-center"
                to="/kreativitas"
                style={{ color: "green", fontSize: "30px" }}
              >
                Kreativitas
              </NavLink>
              <NavLink
                className="d-flex justify-content-center"
                to="/barang-seharian"
                style={{ color: "blue", fontSize: "30px" }}
              >
                Barang Sehari-Hari
              </NavLink>
              <ColoredLine color="grey" />
              <Col style={{}}>
                <h3>Trending</h3>
                <h5>
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                  </ul>
                </h5>
                <ColoredLine color="grey" />
                <h3>
                  Ipsum et culpa cillum cupidatat voluptate in ut aute mollit.
                  Aliquip ullamco adipisicing ipsum do nisi nostrud eiusmod quis
                  incididunt. Deserunt veniam adipisicing officia exercitation
                  nisi ut magna. Consequat nisi reprehenderit magna dolor
                  nostrud. Cupidatat culpa incididunt tempor proident qui velit
                  irure sit nisi reprehenderit ea deserunt. Dolore labore labore
                  cupidatat excepteur nulla nisi adipisicing et aute nulla.
                </h3>
              </Col>
            </Row>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
}

export default Contents;
