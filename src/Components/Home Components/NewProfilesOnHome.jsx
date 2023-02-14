import React from "react";
import { Col, Row, Button, Typography, Card } from "antd";
import { UsergroupAddOutlined, PlusCircleOutlined } from "@ant-design/icons";
import manimg from "../../images/man.jpg";
import womanimg from "../../images/woman.jpg";
import "../../css/style.css";

const { Text, Title } = Typography;

const location = "Nanded";
const education = "Graduate";
const users = [
  {
    name: "Mohammad Mustafa",
    work: `Full Stack Developer (${education})`,
    gender: "Male",
    maslak: "Tablighi",
    age: `22 Years (${location})`,
    img: manimg,
  },
  {
    name: "Unknown",
    work: `Full Stack Developer (${education})`,
    gender: "Male",
    maslak: "Tablighi",
    age: `22 Years (${location})`,
    img: womanimg,
  },
  {
    name: "Mohammad Mustafa",
    work: `Full Stack Developer (${education})`,
    gender: "Male",
    maslak: "Tablighi",
    age: `22 Years (${location})`,
    img: manimg,
  },
  {
    name: "Unknown",
    work: `Full Stack Developer (${education})`,
    gender: "Male",
    maslak: "Tablighi",
    age: `22 Years (${location})`,
    img: womanimg,
  },
  {
    name: "Mohammad Mustafa",
    work: `Full Stack Developer (${education})`,
    gender: "Male",
    maslak: "Tablighi",
    age: `22 Years (${location})`,
    img: manimg,
  },
  {
    name: "Unknown",
    work: `	Assisstant Teacher (${education})`,
    gender: "Male",
    maslak: "Tablighi",
    age: `22 Years (${location})`,
    img: womanimg,
  },
];

const NewProfilesOnHome = () => {
  return (
    <>
      <Row justify="center">
        <Col xs={24} sm={24} md={16} lg={16}>
          <div className="newprofile-home-title">
            <Title
              level={3}
              style={{
                fontFamily: "kaushan script",
                color: "black",
              }}
            >
              <UsergroupAddOutlined /> New Profiles
              <hr style={{ width: "15%" }} />
            </Title>
          </div>
          <div className="newprofiles-home-discription">
            <Text
              style={{
                fontFamily: "Source Code Pro, monospace",
                color: "black",
              }}
            >
              <PlusCircleOutlined /> Some newly added profiles
            </Text>
          </div>
          <Row justify="center">
            {users.map((user) => (
              <Col xs={24} sm={24} md={11} lg={11}>
                <Card
                  hoverable
                  bordered={true}
                  style={{ marginBottom: "10px", marginLeft: "10px" }}
                >
                  <Row justify="space-around">
                    <Col xs={6} sm={6} md={6} lg={6}>
                      <img
                        src={user.img}
                        height="auto"
                        width="100%"
                        style={{ marginTop: "8px" }}
                      />
                    </Col>
                    <Col xs={16} sm={16} md={16} lg={16}>
                      <Text className="font-for-user-cards">{user.name}</Text>
                      <br />
                      <Text className="font-for-user-cards">{user.work}</Text>
                      <br />
                      <Text className="font-for-user-cards">{user.gender}</Text>
                      <br />
                      <Text className="font-for-user-cards">{user.maslak}</Text>
                      <br />
                      <Text className="font-for-user-cards">{user.age}</Text>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                      <p>NRI</p>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}

            <div>
              <Button
                type="primary"
                shape="round"
                size="medium"
                className="newprofile-home-visit-btn-2"
              >
                <PlusCircleOutlined />
                Visit New Profile
              </Button>{" "}
            </div>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default NewProfilesOnHome;
