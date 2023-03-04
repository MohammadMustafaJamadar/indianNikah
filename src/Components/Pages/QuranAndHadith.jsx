import React from "react";
import { Col, Row, Card } from "antd";
import quraanhadiths from "../../utils/quraanAndHadith";
import "../../css/quraanhadith.css";

const QuranAndHadith = (props) => {
  const { darkMode } = props;
  return (
    <>
      <div
        style={{
          marginTop: "60px",
          backgroundColor: darkMode ? "rgb(22, 57, 90)" : "white",
        }}
      >
        <Row justify="center">
          <Col xs={22} sm={22} md={22} lg={20} xl={16}>
            <div
              className="title-hadith"
              style={{ color: darkMode ? "white" : "black" }}
            >
              Hadith
              <hr style={{ width: "50%" }} />
            </div>
            {quraanhadiths.map((quraanAndHadith) => (
              <>
                <Card
                  className={
                    darkMode
                      ? "cards-quraan-hadith-darkTheme"
                      : "cards-quraan-hadith"
                  }
                  hoverable
                >
                  <Row justify="space-around">
                    <Col
                      xs={23}
                      sm={23}
                      md={11}
                      lg={11}
                      xl={11}
                      className="english-hadith"
                    >
                      {quraanAndHadith.english}
                    </Col>
                    <Col
                      xs={23}
                      sm={23}
                      md={11}
                      lg={11}
                      xl={11}
                      className="urdu-hadith"
                    >
                      {quraanAndHadith.urdu}
                    </Col>{" "}
                    <div style={{ marginTop: "10px" }}>
                      {" "}
                      <strong>Reference:</strong> {quraanAndHadith.reference}
                    </div>
                  </Row>
                </Card>
              </>
            ))}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default QuranAndHadith;
