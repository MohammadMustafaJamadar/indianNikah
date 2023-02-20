import React, { lazy, Suspense } from "react";
import { Col, Row, Button, Typography, Card } from "antd";
import { SearchOutlined, ReadOutlined } from "@ant-design/icons";
import "../../css/style.css";
import img20 from "../../photos/img20.jpg";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";

const CarouselForHome = lazy(() =>
  import("../Home Components/CarouselForHome")
);
const GuidelinesForHome = lazy(() =>
  import("../Home Components/GuidelinesForHome")
);
const NewProfilesOnHome = lazy(() =>
  import("../Home Components/NewProfilesOnHome")
);

const { Title, Text } = Typography;

export default function HomePage(props) {
  const { darkMode } = props;
  // const [arabicHadidth, setArabicHadidth] = useState(true);
  // const [englishcHadidth, setarEnglishHadidth] = useState(false);
  // const [urduHadidth, setUrduHadidth] = useState(false);

  const navigateUser = useNavigate();

  const navigate_Search = (event) => {
    event.preventDefault();
    navigateUser("profile/");
  };

  const navigate_Guideliness = (event) => {
    event.preventDefault();
    navigateUser("guidelines/r/");
  };

  return (
    <>
      <div className="homepage" style={{ backgroundImage: `url(${img20})` }}>
        <Marquee
          direction="left"
          speed={50}
          style={{
            color: "white",
            backgroundColor: "rgb(0 0 0 / 67%)",
            fontSize: "20px",
          }}
          gradient={false}
        >
          <div>
            "Marry the single people from among you and the righteous slaves and
            slave-girls. If you are poor, Allah (SwT) will make you rich through
            His favour; and Allah (SwT) is Bountiful, All-Knowing." (24:32).
          </div>
        </Marquee>

        <Row
          style={{
            backgroundColor: "rgba(0,0,0,.3)",
            height: "100%",
            width: "100%",
            alignItems: "center",
          }}
          justify="center"
        >
          <Col xs={24} sm={24} md={16} lg={16}>
            <center>
              <div
                style={{
                  borderRadius: "0px 100px 0px 100px",
                  backgroundColor: "#b1b1ae33",
                  width: "50%",
                }}
              >
                <div>
                  <Title
                    level={3}
                    className="animate__animated animate__backInDown"
                    id="heading-title"
                  >
                    Free Indian Muslim Matrimony (Non-Profit)
                    <hr style={{ width: "20%" }} />
                  </Title>
                </div>

                <div
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Button
                    onClick={navigate_Search}
                    htmlType={"submit"}
                    shape="round"
                    size="medium"
                    className="btn-1-search"
                  >
                    <SearchOutlined />
                    SEARCH PROFILE
                  </Button>{" "}
                  &nbsp;&nbsp;
                  <Button
                    shape="round"
                    size="medium"
                    className="btn-2-guidliness"
                    onClick={navigate_Guideliness}
                  >
                    <ReadOutlined style={{ marginBottom: "-2px" }} /> &nbsp;
                    MARRIAGE GUIDELINES
                  </Button>
                </div>
              </div>
            </center>
          </Col>
        </Row>
      </div>
      <Row
        justify="center"
        style={{ backgroundColor: darkMode ? "#001F3D" : "white" }}
      >
        <br />
        <br /> <br />
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          <div>
            <Title
              className="about-text-section"
              style={{
                color: darkMode ? "white" : "black",
              }}
            >
              About Indian Nikah{" "}
            </Title>
          </div>
          <Row justify="center" className="discription-about-row">
            <Col xs={24} sm={24} md={8} lg={8}>
              <Text
                className="about-discription-1"
                style={{
                  color: darkMode ? "white" : "#84817a",
                }}
              >
                India Nikah is India's 100% free matrimony/shaadi/rishta/rishtey
                website for Indian Muslims covering all Indian states
                (Maharashtra, Karnataka etc) (All Maslak, biradari, education
                backgrounds (doctor engineer etc ) and madarasa pass outs
                (Alim/hafiz/mufti)). This site also offers second marraige
                proposals. Also for Indians staying abroad (NRIs). We also try
                to help regarding jobs, rental accommodation and regarding Share
                Market investment awareness. This is an effort to make your
                efforts easy. This site also offers guidelines (Go to guidelines
                section) on pre and post marriage related topics in the form of
                YouTube videos of experts from all maktab fikr(Sects). Uploading
                profile pics are not mandatory. You can directly Open WhatsApp
                of the profile you are interested in and start communication.
                Please login and stay active on our site to keep your profile on
                top in search results.
              </Text>
              <br />
              <Text className="about-discription-2">
                Note - Paid marriage bureaus/agents/brokers are not allowed to
                use this site. We do not do profile background verification We
                do not have any paid personalised or special service. No office
                location, everything is online.
              </Text>
            </Col>
            <Col xs={24} sm={24} md={1} lg={1}>
              {" "}
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <Card
                className="cards-in-animation "
                hoverable
                style={{
                  boxShadow: `  6.9px 9.7px 15.6px rgba(0, 0, 0, 0.07),
                  14.6px 20.4px 20.7px rgba(0, 0, 0, 0.001),
                  23.2px 32.5px 24.4px rgba(0, 0, 0, -0.003),
                  33.3px 46.7px 27.5px rgba(0, 0, 0, -0.001),
                  45.8px 64.1px 30.5px rgba(0, 0, 0, 0.002),
                  61.8px 86.6px 33.6px rgba(0, 0, 0, 0.004),
                  83.8px 117.4px 37.1px rgba(0, 0, 0, 0.006),
                  116.4px 163.1px 41.5px rgba(0, 0, 0, 0.006),
                  171.1px 239.7px 47.9px rgba(0, 0, 0, 0.005),
                  292px 409px 65px rgba(0, 0, 0, 0.003)`,
                }}
              >
                <iframe
                  width="100%"
                  height="315px"
                  src="https://www.youtube.com/embed/zw_FZ_pH-bk"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  loading="lazy"
                ></iframe>
              </Card>
              <br />
              <br />
              <Text
                style={{
                  fontFamily: "roboto,sans-serif",
                  fontSize: "16px",
                  lineHeight: "1.2",
                  color: darkMode ? "white" : "#84817a",
                }}
              >
                How it works | Mobile App | Features | Marriage guidelines |
                Website in Hindi Urdu | Jobs (Watch in full screen)
              </Text>
              <br />
              <br />
            </Col>
          </Row>
        </Col>
      </Row>
      <Suspense>
        <GuidelinesForHome darkMode={darkMode} />
        <NewProfilesOnHome darkMode={darkMode} />
        <CarouselForHome darkMode={darkMode} />
      </Suspense>
    </>
  );
}
