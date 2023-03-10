import React from "react";
import { Col, Row, Button, Typography, Card } from "antd";
import { UsergroupAddOutlined, PlusCircleOutlined } from "@ant-design/icons";
import manimg from "../../images/man.jpg";
import womanimg from "../../images/woman.jpg";
import "../../css/style.css";
import { useNavigate } from "react-router-dom";

const { Text, Title } = Typography;

const education = "Graduate";
const currentLocation = "Abu Dhabi";
const nativeLocation = "Nanded";
const maratialStatus = "Unmarried";
const maslak = "Tablighi";

const users = [
  {
    id: 1,
    name: `Mohammad Mustafa (${maratialStatus})`,
    work: `Full Stack Developer (${education})`,
    biradari: `No biradari  (${maslak}) `,
    age: `22 Years`,
    img: manimg,
    location: `${currentLocation} ${nativeLocation}`,
  },
  {
    id: 2,
    name: `Unknown (${maratialStatus})`,
    work: `Full Stack Developer (${education})`,
    biradari: `No biradari  (${maslak}) `,
    age: `22 Years `,
    img: womanimg,
    location: `${currentLocation} ${nativeLocation}`,
  },
  {
    id: 3,
    name: `Mohammad Mustafa (${maratialStatus})`,
    work: `Full Stack Developer (${education})`,
    biradari: `No biradari  (${maslak}) `,
    age: `22 Years `,
    img: manimg,
    location: `${currentLocation} ${nativeLocation}`,
  },
  {
    id: 4,
    name: `Unknown (${maratialStatus})`,
    work: `Full Stack Developer (${education})`,
    biradari: `No biradari  (${maslak}) `,
    age: `22 Years `,
    img: womanimg,
    location: `${currentLocation} ${nativeLocation}`,
  },
  {
    id: 5,
    name: `Mohammad Mustafa (${maratialStatus})`,
    work: `Full Stack Developer (${education})`,
    biradari: `No biradari  (${maslak}) `,
    age: `22 Years `,
    img: manimg,
    location: `${currentLocation} ${nativeLocation}`,
  },
  {
    id: 6,
    name: `Unknown( ${maratialStatus})`,
    work: `	Assisstant Teacher (${education})`,
    biradari: `No biradari  (${maslak}) `,
    age: `22 Years `,
    img: womanimg,
    location: `${currentLocation} ${nativeLocation}`,
  },
];

const NewProfilesOnHome = (props) => {
  const { darkMode } = props;
  const navigateUser = useNavigate();

  const navigateUser_NewProfile = () => {
    navigateUser("/profiles/newly-added-profiles");
  };

  const styles = {
    dakrModes: {
      darkBackGround: { backgroundColor: darkMode ? "#001F3D" : "white" },
      darkText: { color: darkMode ? "white" : "black" },
    },
  };

  return (
    <>
      <Row justify="center" style={styles.dakrModes.darkBackGround}>
        <Col xs={23} sm={23} md={23} lg={23} xl={23} xxl={16}>
          <div className="newprofile-home-title">
            <Title
              level={3}
              style={{
                fontFamily: '"Roboto", sans-serif',
                color: styles.dakrModes.darkText.color,
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
                color: styles.dakrModes.darkText.color,
              }}
            >
              <PlusCircleOutlined /> Some newly added profiles
            </Text>
          </div>
          <Row justify="center" style={{ marginTop: "20px" }}>
            {users.map((user) => (
              <Col xs={24} sm={24} md={12} lg={12} xl={8} key={user.id}>
                <Card
                  className={darkMode?"card-iframe-darkTheme":"card-iframe"}
                  hoverable
                  size="small"
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
                          width: "80%",
                        }}
                        alt="No...!"
                        loading="lazy"
                      />
                    </Col>
                    <Col xs={16} sm={16} md={16} lg={16}>
                      <Text className="font-for-user-cards">{user.name}</Text>
                      <br />
                      <Text className="font-for-user-cards">{user.age}</Text>
                      <br />
                      <Text className="font-for-user-cards">{user.work}</Text>
                      <br />
                      <Text className="font-for-user-cards">
                        {user.biradari}{" "}
                      </Text>
                      <br />
                      <Text className="font-for-user-cards">
                        {user.location}
                      </Text>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                      <Button size="small" shape="square">
                        NRI
                      </Button>
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
                className={darkMode?"newprofile-home-visit-btn-2-darkTheme":"newprofile-home-visit-btn-2"}
                onClick={navigateUser_NewProfile}
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
