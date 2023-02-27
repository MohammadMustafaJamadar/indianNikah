import React from "react";
import { Col, Row, Card } from "antd";
import quraanhadiths from "../../utils/quraanAndHadith";
import "../../css/quraanhadith.css";

const QuranAndHadith = () => {
  return (
    <>
      <div style={{ marginTop: "60px" }}>
        <Row justify="center">
          <Col xs={22} sm={22} md={22} lg={20} xl={16}>
            <div className="title-hadith">Hadith
            <hr style={{width:"50%"}} /></div>
            {quraanhadiths.map((quraanAndHadith) => (
              <>
                <Card className="cards-quraan-hadith">
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
