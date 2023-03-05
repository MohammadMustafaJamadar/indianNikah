import { Button, Col, Form, Input, Row, Select } from "antd";
import React from "react";
import { SubCategory } from "../../utils/JobSupportData";
import { Card } from "antd";
import { selectGenderList } from "../../utils/searchFliter";
import TextArea from "antd/es/input/TextArea";
import "../../css/jobsupport.css";
import Title from "antd/es/typography/Title";
import { useState } from "react";

function JobSupport() {
  const [jobSupportFormData, setJobSupportFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    location: "",
    education: "",
    subCategory: "",
    gender: "",
    experience: "",
    details: "",
  });


  const changeFormData = (e) => {
    const { name, value } = e.target;

    setJobSupportFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const changeSubCat = (value) => {
    setJobSupportFormData((prevFormData) => ({
      ...prevFormData,
      subCategory: value,
    }));
  };

  const changeGender = (value) => {
    setJobSupportFormData((prevFormData) => ({
      ...prevFormData,
      gender: value,
    }));
  };

  const handleSend = () => {
    console.log(jobSupportFormData);
    setJobSupportFormData({});
  };
  return (
    <div style={{ marginTop: "60px", marginBottom: "20px" }}>
      <Row justify="center">
        <Col xs={23} sm={23} md={22} lg={22} xl={20} xxl={20}>
          <Card className="job-support-card">
            <Row justify="center">
              <Col xs={23} sm={23} md={22} lg={22} xl={20} xxl={20}>
                <Title
                  style={{ textAlign: "center", color: "#df3768" }}
                  level={2}
                >
                  Job Search Form
                </Title>
              </Col>
              <Col xs={23} sm={23} md={23} lg={23} xl={23} xxl={23}>
                <Form layout="vertical" onFinish={handleSend}>
                  <Form.Item label="Sub category">
                    <Select
                      required={true}
                      name="subCategory"
                      value={jobSupportFormData.subCategory}
                      placeholder="Sub category"
                      style={{
                        width: "100%",
                      }}
                      onChange={changeSubCat}
                      options={SubCategory}
                    />
                  </Form.Item>
                  <Form.Item required={true} label="Name">
                    <Input
                      required={true}
                      name="name"
                      onChange={changeFormData}
                      value={jobSupportFormData.name}
                    ></Input>
                  </Form.Item>

                  <Form.Item label="Gender" name="gender" >
                    <Select
                      required={true}
                      placeholder="Gender"
                      onChange={changeGender}
                      options={selectGenderList}
                    />
                        
                  </Form.Item>
                  <Form.Item
                    label="Phone number"
                    required={true}
                  >
                    <Input
                    required={true}
                      name="phoneNumber"
                      onChange={changeFormData}
                      value={jobSupportFormData.phoneNumber}
                    ></Input>
                  </Form.Item>

                  <Form.Item
                    label="Email"
                    required={true}
                  >
                    <Input
                    required={true}
                      name="email"
                      onChange={changeFormData}
                      value={jobSupportFormData.email}
                      type="email"
                    ></Input>
                  </Form.Item>
                  <Form.Item
                    label="Location"
                    required={true}
                  >
                    <Input
                    required={true}
                      name="location"
                      onChange={changeFormData}
                      value={jobSupportFormData.location}
                    ></Input>
                  </Form.Item>

                  <Form.Item
                    label="Education"
                   
                    required={true}
                  >
                    <Input
                    required={true}
                      name="education"
                      onChange={changeFormData}
                      value={jobSupportFormData.education}
                    ></Input>
                  </Form.Item>
                  <Form.Item
                    label="Experience"
                    required={true}
                  >
                    <Input
                    required={true}
                      name="experience"
                      onChange={changeFormData}
                      value={jobSupportFormData.experience}
                    ></Input>
                  </Form.Item>
                  <Form.Item label="Details">
                    <TextArea
                      name="details"
                      onChange={changeFormData}
                      value={jobSupportFormData.details}
                    ></TextArea>
                  </Form.Item>
                  <center>
                    <Button
                      htmlType="submit"
                      size="medium"
                      className="Job-Support-Send-btn"
                      // onClick={handleSend}
                    >
                      Send
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

export default JobSupport;
