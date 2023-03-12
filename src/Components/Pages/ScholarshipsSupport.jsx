import { Button, Col, Form, Input, Row, Select } from "antd";
import React from "react";

import { Card } from "antd";
import { selectGenderList } from "../../utils/searchFliter";
import TextArea from "antd/es/input/TextArea";
import "../../css/scholarshipsupport.css";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ScholarshipsSupport() {
  const [scholarshipsSupport, setScholarshipsSupport] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    location: "",
    education: "",
    gender: "",
    details: "",
  });
   const navigateuser = useNavigate()
  const changeFormData = (e) => {
    const { name, value } = e.target;

    setScholarshipsSupport((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const changeGender = (value) => {
    setScholarshipsSupport((prevFormData) => ({
      ...prevFormData,
      gender: value,
    }));
  };

  const handleSend = () => {
    console.log(scholarshipsSupport);
    setScholarshipsSupport({});
  };

  const handleScholarshipsDetails = () => {
    navigateuser("/scholarship/details");
  };
  return (
    <div style={{ marginTop: "60px", marginBottom: "20px" }}>
      <Row justify="center">
        <Col xs={23} sm={23} md={22} lg={22} xl={20} xxl={20}>
          <Card className="scholarships-support-card">
            <Row justify="center">
              <Col xs={23} sm={23} md={22} lg={22} xl={20} xxl={20}>
                <Title
                  style={{ textAlign: "center", color: "#df3768" }}
                  level={2}
                >
                  Scholarships Form
                </Title>
              </Col>
              <Col xs={23} sm={23} md={23} lg={23} xl={23} xxl={23}>
                <Form layout="vertical" onFinish={handleSend}>
                  <Form.Item required={true} label="Name">
                    <Input
                      required={true}
                      name="name"
                      onChange={changeFormData}
                      value={scholarshipsSupport.name}
                    ></Input>
                  </Form.Item>

                  <Form.Item label="Gender" name="gender">
                    <Select
                      required={true}
                      placeholder="Gender"
                      onChange={changeGender}
                      options={selectGenderList}
                    />
                        
                  </Form.Item>
                  <Form.Item label="Phone number" required={true}>
                    <Input
                      required={true}
                      name="phoneNumber"
                      onChange={changeFormData}
                      value={scholarshipsSupport.phoneNumber}
                    ></Input>
                  </Form.Item>

                  <Form.Item label="Email" required={true}>
                    <Input
                      required={true}
                      name="email"
                      onChange={changeFormData}
                      value={scholarshipsSupport.email}
                      type="email"
                    ></Input>
                  </Form.Item>
                  <Form.Item label="Location" required={true}>
                    <Input
                      required={true}
                      name="location"
                      onChange={changeFormData}
                      value={scholarshipsSupport.location}
                    ></Input>
                  </Form.Item>

                  <Form.Item label="Education" required={true}>
                    <Input
                      required={true}
                      name="education"
                      onChange={changeFormData}
                      value={scholarshipsSupport.education}
                    ></Input>
                  </Form.Item>

                  <Form.Item label="Details">
                    <TextArea
                      name="details"
                      onChange={changeFormData}
                      value={scholarshipsSupport.details}
                    ></TextArea>
                  </Form.Item>
                  <center>
                    <Button
                      htmlType="submit"
                      size="medium"
                      className="scholarships-Support-Send-btn"
                    >
                      Send
                    </Button>
                  </center>
                  <center>
                    <Button
                      onClick={handleScholarshipsDetails}
                      style={{ marginTop: "10px" }}
                      size="medium"
                      className="scholarships-Support-Send-btn"
                    >
                      Scholarships Details
                    </Button>
                  </center>
                </Form>
              </Col>
              <Col
                style={{ marginTop: "15px", textAlign: "center" }}
                xs={23}
                sm={23}
                md={23}
                lg={23}
                xl={23}
                xxl={23}
              >
                If you think that you can help the Indian Muslim community in
                regards to Job, Nikah, accommodation, scholarship & in education
                etc do let us know on our WhatsApp number given below. We need
                your email address only.
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ScholarshipsSupport;
