import React from "react";
import { Col, Row, Button, Typography, Card } from "antd";
import {
  states,
  countries,
  forGraduate,
  forMaritalStatus,
  ageGroupSelectList,
  biradariSlectBar,
  maslakSlectBar,
} from "../../utils/searchFliter";
import "../../css/categories.css";

const { Title } = Typography;

function FilterForC() {
  
  return (
    <div>
      <Row justify="center">
        <Col xs={23} sm={23} md={20} lg={20} xl={16}>
          <Card size="small" className="card-userInfo">
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="categories-selector-text-div">
                <Title level={2}>State Wise Profiles</Title> <br />
                <hr />
              </div>

              {states.map((state) => (
                <Button className="categories-slector-btns" shape="round">
                  {state.value}
                </Button>
              ))}
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="categories-selector-text-div">
                <Title level={2}>Country Wise Profiles</Title> <br />
                <hr />
              </div>

              {countries.map((country) => (
                <Button className="categories-slector-btns" shape="round">
                  {country.value}
                </Button>
              ))}
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="categories-selector-text-div">
                <Title level={2}>Education Wise Profiles</Title> <br />
                <hr />
              </div>

              {forGraduate.map((education) => (
                <Button className="categories-slector-btns" shape="round">
                  {education.value}
                </Button>
              ))}
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="categories-selector-text-div">
                <Title level={2}>Marital Status Wise Profiles</Title> <br />
                <hr />
              </div>

              {forMaritalStatus.map((status) => (
                <Button className="categories-slector-btns" shape="round">
                  {status.value}
                </Button>
              ))}
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="categories-selector-text-div">
                <Title level={2}>Age Wise Profiles</Title> <br />
                <hr />
              </div>

              {ageGroupSelectList.map((age) => (
                <Button className="categories-slector-btns" shape="round">
                  {age.value}
                </Button>
              ))}
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="categories-selector-text-div">
                <Title level={2}>Biradari Wise Profiles</Title> <br />
                <hr />
              </div>

              {biradariSlectBar.map((biradari) => (
                <Button className="categories-slector-btns" shape="round">
                  {biradari.value}
                </Button>
              ))}
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="categories-selector-text-div">
                <Title level={2}>Maslak Wise Profiles</Title> <br />
                <hr />
              </div>

              {maslakSlectBar.map((maslak) => (
                <Button className="categories-slector-btns" shape="round">
                  {maslak.value}
                </Button>
              ))}
            </Col>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default FilterForC;
