import "./Contents.css";
import { Container, Col, Row, Button, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import VideoPlayerFunction from "../Config/CloudinaryVideoPLayer";
import CloudinaryUploadWidget from "../Config/CloudinaryUploadWidget";
import { LikeOutlined } from "@ant-design/icons";
import axios from "axios";
import { useEffect, useState } from "react";


const ColoredLine = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: 5,
    }}
  />
);

function Contents() {
// const [allVids, setAllVids] = useState([])

// useEffect(async() => {
//   const result = axios.get("localahost:5000/video");
//   setAllVids(result.data);

// }, [])



  const videoOptions = {
    publicId: `cptvg3z5b5mcjs1gquap`
  };

  return (
    <div>
      <Container fluid style={{}}>
        <Row className="pt-5 d-flex text-center">
          <Col />
          <Col id="divBorder" lg={7} style={{}} className="">
            <Row>
              <Row className="p-5">
                <Col>
                    <VideoPlayerFunction options={videoOptions} />
                </Col>
                <Col>
                  <Button
                    id="button-exp"
                    className="rounded-circle"
                    style={{ position: "absolute" }}
                  >
                    <LikeOutlined />
                  </Button>
                </Col>
              </Row>
              <ColoredLine color="grey" />
            </Row>
            <Col />
          </Col>
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
            className="rounded d-flex justify-content-center sticky-top overflow-auto"
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
