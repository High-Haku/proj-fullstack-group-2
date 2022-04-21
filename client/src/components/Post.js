import React, { useState } from "react";
import { Row, Col, Container, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Post() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setPost(() => ({
      ...post,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    axios.post("http://localhost:5000/create-a-project", post).then((res) => {
      alert(res.data.message);

      navigate("/");
    });
  };

  return (
    <div>
      <Container className="d-flex justify-content-center text-align-center">
        <Col lg={4}>
          <Row>
            <Form>
            <input type="file" className='' value="" />
            <input
              type="text"
              name="title"
              placeholder="TITLE"
              value={post.title}
              onChange={handleChange}
              className=''
            />
            <input
              type="text"
              name="description"
              placeholder="DESCRIPTION"
              value={post.description}
              onChange={handleChange}
              className=''
            />
            <label for="category" className=''>
              Pick a Category
            </label>
            <select id="selectBox" name="category">
              <option value="kreativitas">Kreativitas</option>
              <option value="barangHarian">Barang Sehari-hari</option>
            </select>
            <div className='p-5'/>
            <button >SUBMIT</button>
            </Form>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default Post;
