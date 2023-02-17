import React, { useState } from "react";
import "../../css/userProfilePage.css";
import { Button, Card, Col, Row, Typography } from "antd";
import {
  DownloadOutlined,
  EditOutlined,
  ReadOutlined,
  UserOutlined,
  HomeOutlined,
  MobileOutlined,
  InfoCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Alert } from "antd";
import { useNavigate } from "react-router-dom";


const userdata = {
  PersonsalInfo: {
    name: "Mohammed mustafa",
    gender: "male",
    age: 22,
    height: "5`3",
    ocucupation: "Assitant Teacher",
    Education: "Graduate",
    Degree: "D.Ei.Ed",
    MaritalStatus: "Unmarried",
    PhysicalStatus: "Normal",
    hobbies: "Cricket,Coding",
    weight: 72,
    Native: "India (Nanded, Maharashtra)",
    currentLocation: "India (Nanded, Maharashtra)",
  },
  FamilyInfo: {
    Father: "mulka Husain Jamadar (Teacher)",
    mother: "Maseem Begum (Teacher)",
    siblings: "1 Brother(1 Married) 1 Sister(1 Married)",
    biradari: "No Biradari",
    maslak: "Deobandi(Tablighi)",
  },

  ContactInfo: {
    Conact: 8983768055,
    WhatsappNo: 8983768055,
    ContactOf: "self",
  },
  OtherInfo: { Expectations: "Nothing", ExtraInfo: "Nothing" },
};
const { Text, Title } = Typography;
export default function UserProfilePage() {
  const [user, setUser] = useState(userdata);

  const navigateUser = useNavigate()
  const handleEdit = () => {
    navigateUser("/profile/update")
  }
  const handleDelete = () => {
    navigateUser("/profile/delete");
  };



  console.log(user);
  return (
    <div style={{ marginTop: "60px" }}>
      <div className="user-profile-page-guidelines">
        <Text>
          <Link
            style={{
              //   fontFamily: "Source Code Pro, monospace",
              color: "black",
            }}
            to="guidelines/r/"
          >
            <ReadOutlined /> Visit Marriage Guidelines
          </Link>
        </Text>
      </div>
      <div className="user-profile-edit">
        <Row justify="center">
          <Col xs={24} sm={24} md={20} lg={20}>
            <Card
              style={{
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                borderColor: "red",
              }}
            >
              <Button
                size="large"
                style={{ width: "100%", backgroundColor: "gray" }}
                type="primary"
                shape="round"
                icon={<EditOutlined />}
              >
                EDIT/UPDATE/CHANGE PROFILE
              </Button>
              <div className="user-profile-card-discription">
                <Title level={4}>
                  Total 10 users visited your profile and last visit was on 0
                  visits in last 30 mins. 13/02/2023
                </Title>
                <div className="user-profile-card-alert">
                  <Alert
                    className="profile-alert"
                    message={
                      <h3>
                        Important Note : If you do not find a match in your
                        biradari/maslak then it is perfectly fine in islam to
                        marriage outside your biradari/maslak with other Muslim.
                        Watch{" "}
                        <Link to="guidelines/r/">Marriage Guidelines</Link>{" "}
                        section for more information.
                      </h3>
                    }
                    type="success"
                  />
                </div>
                <div className="user-profile-card-footer">
                  <Title style={{ borderBlock: " 1px solid" }} level={4}>
                    This section is only visible to you
                  </Title>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <div className="user-profile-photo-not-avl">
          <Title
            level={4}
            style={{
              marginTop: "10px",
              color: "black",
            }}
          >
            Photo Not Available!
          </Title>
        </div>
      </div>
      <Row justify="center">
        <Col xs={24} sm={24} md={20} lg={20}>
          <div className="preview-user">
            <div className="user-details">
              <Text style={{ fontSize: "18px ", fontWeight: "bold" }}>
                Mohammad Mustafa | Profile Code: 076873
              </Text>
              <br />
              <Text style={{ fontSize: "18px ", fontWeight: "bold" }}>
                Created On February 04 2023
              </Text>
            </div>
            <div className="download-bioData">
              <Button
                size="large"
                shape="rond"
                type="primary"
                style={{ backgroundColor: "#263338", height: "100%" }}
              >
                <DownloadOutlined /> Download Bio Data
                <br />
                (To share on WhatsApp etc)
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <div className="user-profile-table">
        <Row justify="center">
          <Col span={20}>
            <Row className="user-profile-personal_info">
              <Col span={24} className="user-profile-tb-title">
                {" "}<UserOutlined />{" "}Personal Information
              </Col>
              <Col span={7}>Name</Col>
              <Col span={17}>{user.PersonsalInfo.name}</Col>
              <Col span={7}>Gender</Col>
              <Col span={17}>{user.PersonsalInfo.age}</Col>
              <Col span={7}>Height</Col>
              <Col span={17}>{user.PersonsalInfo.height}</Col>
              <Col span={7}>Occupation</Col>
              <Col span={17}>{user.PersonsalInfo.ocucupation}</Col>
              <Col span={7}>Education</Col>
              <Col span={17}>{user.PersonsalInfo.Education}</Col>
              <Col span={7}>Physical Status</Col>
              <Col span={17}>{user.PersonsalInfo.PhysicalStatus}</Col>
              <Col span={7}>Hobbies</Col>
              <Col span={17}>{user.PersonsalInfo.hobbies}</Col>
              <Col span={7}>Weight</Col>
              <Col span={17}>{user.PersonsalInfo.height}</Col>
              <Col span={7}>Native</Col>
              <Col span={17}>{user.PersonsalInfo.Native}</Col>
              <Col span={7}>Current Location</Col>
              <Col span={17}>{user.PersonsalInfo.currentLocation}</Col>
              <Col span={24} className="user-profile-tb-title">
                {" "}
                <HomeOutlined />{" "} Family Information
              </Col>
              <Col span={7}>Father</Col>
              <Col span={17}>{user.FamilyInfo.Father}</Col>
              <Col span={7}>Mother</Col>
              <Col span={17}>{user.FamilyInfo.mother}</Col>
              <Col span={7}>Siblings</Col>
              <Col span={17}>{user.FamilyInfo.siblings}</Col>
              <Col span={7}>Biradari</Col>
              <Col span={17}>{user.FamilyInfo.biradari}</Col>
              <Col span={7}>Maslak</Col>
              <Col span={17}>{user.FamilyInfo.maslak}</Col>
              <Col span={24} className="user-profile-tb-title">
                <Row justify="space-around" className="conact-info-title">
                  <Col span={24}>
                    {" "}
                    <MobileOutlined />{" "} Conact Information
                  </Col>
                  <Col className="conact-info-note" span={24}>
                    Note : Contact details are only availble during 9AM morning
                    to 9PM evening (IST, Indian time)
                  </Col>
                </Row>
              </Col>
              <Col span={7}>Conact</Col>
              <Col span={17}>{user.ContactInfo.Conact}</Col>
              <Col span={7}>Whatsapp Number</Col>
              <Col span={17}>{user.ContactInfo.WhatsappNo}</Col>
              <Col span={7}>Conact Of</Col>
              <Col span={17}>{user.ContactInfo.ContactOf}</Col>
              <Col span={24} className="user-profile-tb-title">
                {" "}
                <InfoCircleOutlined /> {" "}Other Information
              </Col>
              <Col span={7}>Expectations</Col>
              <Col span={17}>{user.OtherInfo.Expectations}</Col>
              <Col span={7}>Extra Information</Col>
              <Col span={17}>{user.OtherInfo.ExtraInfo}</Col>
            </Row>
          </Col>
          <Row justify="center">
            <Col span={12}>
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  marginTop: "40px",
                }}
              >
                <Button
                  htmlType={"submit"}
                  shape="round"
                  size="large"
                  className="btn-1-search"
                  onClick={handleEdit}
                >
                  <EditOutlined />
                  EDIT PROFILE
                </Button>{" "}
                &nbsp;&nbsp;
                <Button
                  shape="round"
                  size="large"
                  className="btn-2-guidliness"
                  onClick={handleDelete}
                >
                  <DeleteOutlined />
                  DELETE PROFILE
                </Button>
              </div>
            </Col>
          </Row>
        </Row>
      </div>
    </div>
  );
}
