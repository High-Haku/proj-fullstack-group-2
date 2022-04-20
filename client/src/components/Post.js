import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

function Post() {
const [post, setPost] = useState()

const handleChange = () => {

}



  return (
    <div>
      <Container className="d-flex justify-content-center text-align-center">
        <Col lg={4}>
          <Row>
            <input type="file" />
            <input type="text" placeholder="TITLE" value="title" onChange={handleChange} />
            <input type="text" placeholder="DESCRIPTION" value="description" onChange={handleChange} />
            <label for="category">Pick a Category</label>
            <select name = 'category'>
                <option value = 'kreativitas'>Kreativitas</option>
                <option value = 'barangHarian'>Barang Sehari-hari</option>
            </select>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default Post;
