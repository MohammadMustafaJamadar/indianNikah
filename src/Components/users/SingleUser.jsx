import React, { useState, useEffect } from "react";
import "../../css/userProfilePage.css";
import { Button, Checkbox, Col, Input, Modal, Row, Typography } from "antd";
import {
  DownloadOutlined,
  InfoCircleFilled,
  EditOutlined,
  UserOutlined,
  HomeOutlined,
  MobileOutlined,
  InfoCircleOutlined,
  DeleteOutlined,
  WhatsAppOutlined,
  RedoOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Text, Title } = Typography;
export default function SingleUser(props) {
  const {
    darkMode,
    colors,
    user,
    isUserLoggedIn,
    whatsAppNumber,
    setWhatsAppNumber,
  } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [checkbox, setCheckBox] = useState();
  const [disabledcontinue, setDisabledcontinue] = useState(true);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaTotal, setCaptchaTotal] = useState();
  const [errMessege, setErrMessege] = useState("");
  const styles = {
    backGroundColor: {
      backgroundColor: darkMode ? "#16395A" : "white",
      marginTop: "60px",
    },
    backGroundColorThemes: {
      background: darkMode
        ? "#071B2F"
        : colors.green
        ? "linear-gradient(107deg, rgb(13, 198, 180) 8.1%, rgb(33, 198, 138) 79.5%)"
        : colors.blue
        ? "linear-gradient(to bottom right, #0487A0, #6A70DD)"
        : colors.purple
        ? "linear-gradient(to bottom right, #B27BE0, #8B51FF)"
        : "linear-gradient(332deg, rgba(223,55,61,1) 21%, rgba(223,55,104,1) 83%)",
    },
  };

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      getTwoRandomNumbers();
    }
    
    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(()=>{
    const now = new Date();
    const hour = now.getHours();
    if(hour >= 9 && hour < 21){
      setWhatsAppNumber(user.contact_number);
    }else{
      setWhatsAppNumber("Only visible during 9AM to 9PM, you can add to favourite instead");
    }
  },[setWhatsAppNumber, user])

  const navigateUser = useNavigate();
  const handleEdit = () => {
    navigateUser("/profile/update");
  };
  const handleDelete = () => {
    navigateUser("/profile/delete");
  };
  const handleWhatsappContact = () => {
    setModalOpen(true);
  };
  const handleCancel = () => {
    setModalOpen(false);
  };
  const handleContinue = () => {
    const url = `https://wa.me/${user.whatsapp_country_code}${user.whatsapp_number}?text=Asslamu+alaikum`;
    setModalOpen(false);
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    }
  };
  const handleCheckBox = (e) => {
    setCheckBox(e.target.checked);
  };

  const getTwoRandomNumbers = () => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    setNum1(num1);
    setNum2(num2);
  };

  const changeCaptcha = (e) => {
    let result = +e.target.value;

    setCaptchaTotal(result);
  };

  const handleCaptcha = (e) => {
    e.preventDefault();
    const total = num1 + num2;
    if (captchaTotal === total) {
      setDisabledcontinue(false);
      setErrMessege("");
    } else {
      getTwoRandomNumbers();
      setErrMessege("Invalid CAPTCHA Please try again.");
      setCaptchaTotal(null);
    }
  };
  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      if (!isUserLoggedIn) {
        navigateUser("../../accounts/login/");
      }
    }

    return () => {
      isCancelled = true;
    };
  }, [isUserLoggedIn, navigateUser, user]);

  return (
    <div style={styles.backGroundColor}>
      <div>
        <div className="user-profile-photo-not-avl">
          {user.photo_1 || user.photo_2 || user.photo_3 ? (
            <>
              {user.photo_1 && (
                <img
                  className="perticular-user-img"
                  src={user.photo_1}
                  alt="Not available"
                />
              )}
              {user.photo_2 && (
                <img
                  className="perticular-user-img"
                  src={user.photo_2}
                  alt="Not  available....!"
                />
              )}
              {user.photo_3 && (
                <img
                  className="perticular-user-img"
                  src={user.photo_3}
                  alt="Not  available....!"
                />
              )}
            </>
          ) : (
            <Title
              level={4}
              style={{
                marginTop: "10px",
                color: darkMode ? "white" : "black",
              }}
            >
              Photo Not Available!
            </Title>
          )}
        </div>
      </div>
      <Row justify="center" style={{ marginBottom: "20px" }}>
        <Col xs={22} sm={22} md={22} lg={20} xl={14}>
          <div className="preview-user">
            <div className="user-details">
              <Text
                style={{
                  fontSize: "18px ",
                  fontWeight: "bold",
                  color: darkMode ? "white" : "black",
                }}
              >
                {user.full_name} | Profile Code: {user.profile_code}
              </Text>
              <br />
              <Text
                style={{
                  fontSize: "18px ",
                  fontWeight: "bold",
                  color: darkMode ? "white" : "black",
                }}
              >
                Created On February 04 2023
              </Text>
            </div>
            <div
              className="download-bioData"
              style={{ color: darkMode ? "white" : "black" }}
            >
              <Button
                size="large"
                shape="rond"
                type="primary"
                style={{
                  backgroundColor: "#263338",
                  height: "100%",
                  marginTop: "20px",
                }}
              >
                <DownloadOutlined /> Download Bio Data
                <br />
                (To share on WhatsApp etc)
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <div style={{ color: darkMode ? "white" : "black" }}>
        <Row justify="center">
          <Col
            xs={22}
            sm={22}
            md={22}
            lg={20}
            xl={14}
            className="user-profile-table"
          >
            <Row className="user-profile-personal_info">
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                className="user-profile-tb-title"
                style={styles.backGroundColorThemes}
              >
                <UserOutlined /> Personal Information
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                Name
              </Col>
              <Col xs={17} sm={17} md={17} lg={17}>
                {user.full_name}
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                Gender
              </Col>
              <Col xs={17} sm={17} md={17} lg={17}>
                {user.age} Years
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                Height
              </Col>
              <Col xs={17} sm={17} md={17} lg={17}>
                {user.height}
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                Occupation
              </Col>
              <Col xs={17} sm={17} md={17} lg={17}>
                {user.occupation}
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                Education
              </Col>
              <Col xs={17} sm={17} md={17} lg={17}>
                {user.degree ? user.degree : user.education}
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                Physical Status
              </Col>
              <Col xs={17} sm={17} md={17} lg={17}>
                {user.physical_status}
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                Hobbies
              </Col>
              <Col xs={17} sm={17} md={17} lg={17}>
                {user.hobbies}
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                Weight
              </Col>
              <Col xs={17} sm={17} md={17} lg={17} xl={17}>
                {user.weight}
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                Native
              </Col>
              <Col xs={17} sm={17} md={17} lg={17}>
                {`${user.country} (${user.city_native}, ${user.state})`}
              </Col>
              <Col xs={7} sm={7} md={7} lg={7} xl={7}>
                Current Location
              </Col>
              <Col xs={17} sm={17} md={17} lg={17}>
                {`${user.country_current} (${user.city_current}, ${user.state_current})`}
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                className="user-profile-tb-title"
                style={styles.backGroundColorThemes}
              >
                {" "}
                <HomeOutlined /> Family Information
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                Father
              </Col>
              <Col xs={17} sm={17} md={17} lg={17}>
                {user.fathers_name}
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                Mother
              </Col>
              <Col xs={17} sm={17} md={17} lg={17}>
                {user.mothers_name}
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                Siblings
              </Col>
              <Col xs={17} sm={17} md={17} lg={17}>
                {`${user.no_of_brothers} Brother (${user.no_of_married_brothers} Married), ${user.no_of_sisters} Sisters (${user.no_of_married_sisters} Married) `}
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                Biradari
              </Col>
              <Col xs={17} sm={17} md={17} lg={17}>
                {user.biradari ? user.biradari : "No Biradari"}
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                Maslak
              </Col>
              <Col xs={17} sm={17} md={17} lg={17}>
                {user.maslak}
              </Col>
              <Col
                xs={24}
                md={24}
                sm={24}
                lg={24}
                className="user-profile-tb-title"
                style={styles.backGroundColorThemes}
              >
                <Row justify="space-around" className="conact-info-title">
                  <Col xs={24} sm={24} md={24} lg={24}>
                    {" "}
                    <MobileOutlined /> Conact Information
                  </Col>
                  <Col
                    xs={24}
                    md={24}
                    sm={24}
                    lg={24}
                    className="conact-info-note"
                  >
                    Note : Contact details are only availble during 9AM morning
                    to 9PM evening (IST,Indian time)
                  </Col>
                </Row>
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                Conact
              </Col>
              <Col xs={17} sm={17} md={17} lg={17}>
                {whatsAppNumber}
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                Whatsapp Number
              </Col>
              <Col xs={17} sm={17} md={17} lg={17}>
                <Button
                  shape="round"
                  size="large"
                  className="btn-whatsapp"
                  onClick={handleWhatsappContact}
                >
                  <WhatsAppOutlined />
                </Button>
                <Modal
                  okButtonProps={{ disabled: disabledcontinue }}
                  onOk={handleContinue}
                  okText={<span>Continue</span>}
                  title={
                    <>
                      <InfoCircleFilled /> instructions
                    </>
                  }
                  width="70%"
                  onCancel={handleCancel}
                  open={modalOpen}
                >
                  <Row>
                    <Col
                      key={77}
                      xs={24}
                      sm={24}
                      md={24}
                      lg={24}
                      xl={24}
                      xxl={24}
                    >
                      <div className="terms-conditions-english">
                        1. Respect, Respect and Respect each other. Give respect
                        and take respect. <br />
                        2. Read expectations clearly before start talking to
                        others. (Set your expecations also clearly in your
                        profile).
                        <br />
                        3. Elder males (35+) not to communicate with females of
                        age 20-25. Female profiles may not feel good in such
                        cases..
                        <br />
                        4. Be a good Muslim, a human being and show good
                        character on WhatsApp chats/calls/messages.
                        <br />
                        5. 2nd marriage interested males to be extra careful to
                        whom you are sending messages.
                        <br />
                        6. Lets make this world a better place to live for
                        everyone.
                      </div>
                    </Col>
                    <Col
                      key={88}
                      xs={24}
                      sm={24}
                      md={24}
                      lg={24}
                      xl={24}
                      xxl={24}
                    >
                      <div className="terms-conditions-marathi">
                        1. इज़्ज़त एहतराम से बात चीत की शुरुवात करें। इज़्ज़त दें और
                        इज़्ज़त लें।
                        <br />
                        2. दूसरों से बात करना शुरू करने से पहले उनकी
                        एक्सपेक्टेशन(रिश्ता कैसा चाहिए) ये अच्छे से पढ़ें। (अपनी
                        एक्सपेक्टेशन को भी अपनी प्रोफ़ाइल में अच्छे से लिखें)।
                        <br />
                        3. बड़ी उम्र के मेल(मर्द) (35+) , छोटी उम्र की फीमेल
                        प्रोफाइल से कांटेक्ट न करें । इससे से फीमेल प्रोफाइल को
                        अच्छा नहीं लग सकता ह। <br />
                        4. एक अच्छा मुसलमान, एक अच्छा इंसान बनें और व्हाट्सएप
                        चैट/कॉल/मैसेज पर अच्छा किरदार/अख़लाक़ दिखाएँ।
                        <br />
                        5. दूसरी शादी की उम्मीद रखने वाले मर्द, किसी से कांटेक्ट
                        करने के पहले ध्यान दे। हर फीमेल प्रोफाइल से कांटेक्ट न
                        करे।
                        <br />
                        6. आइए इस दुनिया को सभी के रहने के लिए एक बेहतर जगह
                        बनाएं।
                      </div>
                    </Col>
                    <Col
                      key={99}
                      xs={24}
                      sm={24}
                      md={24}
                      lg={24}
                      xl={24}
                      xxl={24}
                    >
                      <Checkbox
                        className="terms-and-conditions"
                        defaultChecked={false}
                        onChange={handleCheckBox}
                        checked={checkbox}
                      >
                        I agree to follow all above,मैं ऊपर की सभी बातों पर अमल
                        करूंगा
                      </Checkbox>
                    </Col>
                  </Row>
                  <Row justify="start">
                    <Col
                      xs={24}
                      sm={24}
                      md={24}
                      lg={24}
                      xl={24}
                      xxl={24}
                      style={{ margin: "10px  0" }}
                    >
                      <span style={{ border: "1px solid", padding: "3px" }}>
                        {num1} + {num2} = ?
                      </span>{" "}
                      <Input
                        type="text"
                        value={captchaTotal}
                        onChange={changeCaptcha}
                        style={{ width: "70px" }}
                      />{" "}
                      {disabledcontinue ? (
                        <RedoOutlined
                          onClick={getTwoRandomNumbers}
                          style={{ fontSize: "18px" }}
                        />
                      ) : (
                        <CheckCircleTwoTone style={{ fontSize: "20px" }} />
                      )}{" "}
                      <Button
                        disabled={!checkbox}
                        style={{ marginLeft: "10px" }}
                        type="primary"
                        danger
                        onClick={handleCaptcha}
                      >
                        Submit
                      </Button>
                      <br />
                      <span style={{ color: "red" }}>{errMessege}</span>
                    </Col>
                  </Row>
                </Modal>
              </Col>
              <Col xs={7} sm={7} md={7} lg={7}>
                {" "}
                Conact Of
              </Col>
              <Col xs={17} sm={17} md={17} lg={17}>
                {user.contact_of}
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                className="user-profile-tb-title"
                style={styles.backGroundColorThemes}
              >
                {" "}
                <InfoCircleOutlined /> Other Information
              </Col>
              <Col xs={9} sm={9} md={7} lg={7}>
                Expectations
              </Col>
              <Col xs={15} sm={15} md={17} lg={17}>
                {user.expectations}
              </Col>
              <Col xs={9} sm={9} md={7} lg={7}>
                Extra Information
              </Col>
              <Col xs={15} sm={15} md={17} lg={17}>
                {user.extra_information}
              </Col>
            </Row>
          </Col>

          <Col xs={12} sm={12} md={12} lg={12}>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "40px",
                marginBottom: "20px",
              }}
            >
              <Button
                htmlType={"submit"}
                shape="round"
                size="large"
                className="btn-1-editeprofile"
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
      </div>
    </div>
  );
}
