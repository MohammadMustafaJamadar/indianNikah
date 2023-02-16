import { Card, Col, Row } from "antd";
import Typography from "antd/es/typography";

import { UsergroupAddOutlined, PlusCircleOutlined } from "@ant-design/icons";
import manimg from "../../images/man.jpg";
import womanimg from "../../images/woman.jpg";
import "../../css/newProfile.css";
export default function NewProfilePage() {
  const { Text, Title } = Typography;

  const location = "Nanded";
  const education = "Graduate";
  const users = [
    {
      id: 1,
      name: "Mohammad Mustafa",
      work: `Full Stack Developer (${education})`,
      gender: "Male",
      maslak: "Tablighi",
      age: `22 Years (${location})`,
      img: manimg,
    },
    {
      id: 2,
      name: "Unknown",
      work: `Full Stack Developer (${education})`,
      gender: "Male",
      maslak: "Tablighi",
      age: `22 Years (${location})`,
      img: womanimg,
    },
    {
      id: 3,
      name: "Mohammad Mustafa",
      work: `Full Stack Developer (${education})`,
      gender: "Male",
      maslak: "Tablighi",
      age: `22 Years (${location})`,
      img: manimg,
    },
    {
      id: 4,
      name: "Unknown",
      work: `Full Stack Developer (${education})`,
      gender: "Male",
      maslak: "Tablighi",
      age: `22 Years (${location})`,
      img: womanimg,
    },
    {
      id: 5,
      name: "Mohammad Mustafa",
      work: `Full Stack Developer (${education})`,
      gender: "Male",
      maslak: "Tablighi",
      age: `22 Years (${location})`,
      img: manimg,
    },
    {
      id: 6,
      name: "Unknown",
      work: `	Assisstant Teacher (${education})`,
      gender: "Male",
      maslak: "Tablighi",
      age: `22 Years (${location})`,
      img: womanimg,
    },
  ];

  return (
    <div style={{ marginTop: "60px" }}>
      <Row justify="center">
        <Col xs={24} sm={24} md={16} lg={16}>
          <div className="newprofile-title">
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
          <div className="newprofiles-discription">
            <Text
              style={{
                fontFamily: "Source Code Pro, monospace",
                color: "black",
              }}
            >
              <PlusCircleOutlined /> Showing Latest 30 Profiles

            </Text>
          </div>
          <Row justify="center">
            {users.map((user) => (
              <Col xs={24} sm={24} md={11} lg={11} key={user.id}>
                <Card
                  hoverable
                  bordered={true}
                  style={{ marginBottom: "10px", marginLeft: "10px" }}
                >
                  <Row justify="space-around">
                    <Col xs={6} sm={6} md={6} lg={6}>
                      <img
                        src={user.img}
                        style={{
                          marginTop: "8px",
                          height: "auto",
                          width: "100%",
                        }}
                        alt="No...!"
                        loading="lazy"
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
          </Row>
        </Col>
      </Row>
    </div>
  );
}
