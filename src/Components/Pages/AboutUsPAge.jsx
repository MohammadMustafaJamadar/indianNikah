import React from "react";
import "../../css/footer.css";
import { Row, Col, Typography, Card } from "antd";

const { Text, Title } = Typography;
const aboutUsContent = [
  {
    link: "https://www.youtube.com/embed/zw_FZ_pH-bk",
    discription: `  IndiaNikah.com | How it works | Mobile App | Features | Marriage
  guidelines | Hindi Urdu | Jobs`,
  },
  {
    link: "https://www.youtube.com/embed/A3FTbTHVPTE",
    discription: `IndiaNikah.com | Muslim Matrimony 100% Free | Marriage
  Guidelines | Job/Document/Scholarship Support`,
  },
  {
    link: "https://www.youtube.com/embed/GivMrMPEep8",
    discription: `  IndiaNikah.com | क्या है और क्यूँ शुरु कि गई? |کیا ہے اور کیوں
  شروع کی گئی؟`,
  },
  {
    link: "https://www.youtube.com/embed/m7tMvYlfoQE",
    discription: `  ndiaNikah.com | what it is and why we started? | ಅದು ಏನು ಮತ್ತು
  ನಾವು ಏಕೆ ಪ್ರಾರಂಭಿಸಿದ್ದೇವೆ?`,
  },
  {
    link: "https://www.youtube.com/embed/a8U6yKS3ydg",
    discription: `   IndiaNikah.com|100% Free Muslim Matrimony website and App |
  Marriage guidelines |फ्री मुसलिम रिशते`,
  },
  {
    link: "https://www.youtube.com/embed/4T3W0J0n0S",
    discription:
      "IndiaNikah.com|Marriage guidelines |Happy Married life |खुशहाल शादीशुदा जिंदगी|خوش حال ازدواجی زندگی",
  },
];

export default function AboutUsPage(props) {
  const { darkMode } = props;

  const styles = {
    fontFamily: {
      text: { fontFamily: "Oswald" },
    },
  };

  return (
    <>
      <div
        style={{
          marginTop: "60px",
          backgroundColor: darkMode ? "rgb(22, 57, 90)" : "white",
        }}
      >
        <Row justify="space-around">
          <Col xs={23} sm={23} md={23} lg={16} xl={10}>
            <div style={{ textAlign: "center" }}>
              <Title level={3} style={{ color: darkMode ? "white" : "black" }}>
                {" "}
                About IndiaNikah
              </Title>
            </div>
            {aboutUsContent.map((ele) => (
              <Card className="card-userInfo" hoverable>
                <iframe
                  width="100%"
                  height="315"
                  src={ele.link}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
                <Text style={styles.fontFamily.text}>{ele.discription}</Text>
              </Card>
            ))}
          </Col>
        </Row>
      </div>
    </>
  );
}
