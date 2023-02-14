import { Card, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";
import axois from "axios";
export default function NewProfilePage() {
  const [fakedata, SetFakeData] = useState([]);
  useEffect(() => {
    axois.get("https://dummyjson.com/products").then(async (res) => {
      const data = await res.data.products;
      SetFakeData(data);
    });
  }, []);
  console.log("fAKE DATA ", fakedata);

  return (
    <div style={{ marginTop: "60px" }}>
      <div className="heading">
        <Title level={4}>Showing Latest 30 Profiles</Title>
      </div>
      <Row justify="center">
        <Col xs={24} sm={24} md={12} lg={12}>
          <Row justify="space-around">
            {fakedata.map((item) => (
              <Col
                xs={24}
                sm={24}
                md={11}
                lg={11}
                style={{ marginBottom: "10px" }}
              >
                <Card className="profile-card">
                  <Row justify="space-around">
                    <Col
                      xs={8}
                      sm={8}
                      md={8}
                      lg={8}
                      style={{ backgroundColor: "red" }}
                    >
                      <img
                        src={item.images[0]}
                        style={{ height: "100%", width: "100%" }}
                        alt=""
                      />
                    </Col>
                    <Col
                      xs={16}
                      sm={16}
                      md={16}
                      lg={16}
                      // style={{ backgroundColor: "green" }}
                    >
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          <Title level={5}>{item.title}</Title>
                        </li>
                        <li>{item.brand}</li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
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
