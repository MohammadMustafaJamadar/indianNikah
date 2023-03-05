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

function FilterForC(props) {
  const {darkMode, styles} = props;
  return (
    <div>
      <Row justify="center" >
        <Col xs={23} sm={23} md={23} lg={20} xl={16}>
          <Card size="small" className="card-userInfo" style={{backgroundColor: darkMode ? "#071B2F" : "white",}}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="categories-selector-text-div">
                <Title level={4} style={styles.darkThemText}>State Wise Profiles</Title> <br />
                <hr style={styles.darkThemText} />
              </div>
              <div className="categories-slector-div">
              {states.map((state) => (
               
                <Button className={darkMode ? "categories-darktheme-slector-btns":"categories-slector-btns"} >
                  {state.value}
                </Button>
               
              ))}
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="categories-selector-text-div">
                <Title level={4} style={styles.darkThemText}>Country Wise Profiles</Title> <br />
                <hr style={styles.darkThemText} />
              </div>
              <div className="categories-slector-div">
              {countries.map((country) => (
                <Button className={darkMode ? "categories-darktheme-slector-btns":"categories-slector-btns"} >
                  {country.value}
                </Button>
              ))}
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="categories-selector-text-div">
                <Title level={4} style={styles.darkThemText}>Education Wise Profiles</Title> <br />
                <hr style={styles.darkThemText} />
              </div>
              <div className="categories-slector-div">
              {forGraduate.map((education) => (
                <Button className={darkMode ? "categories-darktheme-slector-btns":"categories-slector-btns"} >
                  {education.value}
                </Button>
              ))}
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="categories-selector-text-div">
                <Title style={styles.darkThemText} level={4}>Marital Status Wise Profiles</Title> <br />
                <hr style={styles.darkThemText} />
              </div>
              <div className="categories-slector-div">
              {forMaritalStatus.map((status) => (
                <Button className={darkMode ? "categories-darktheme-slector-btns":"categories-slector-btns"} >
                  {status.value}
                </Button>
              ))}
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="categories-selector-text-div">
                <Title style={styles.darkThemText} level={4}>Age Wise Profiles</Title> <br />
                <hr style={styles.darkThemText} />
              </div>
              <div className="categories-slector-div">
              {ageGroupSelectList.map((age) => (
                <Button className={darkMode ? "categories-darktheme-slector-btns":"categories-slector-btns"} >
                  {age.value}
                </Button>
              ))}
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="categories-selector-text-div">
                <Title style={styles.darkThemText} level={4}>Biradari Wise Profiles</Title> <br />
                <hr style={styles.darkThemText} />
              </div>
              <div className="categories-slector-div">
              {biradariSlectBar.map((biradari) => (
                <Button className={darkMode ? "categories-darktheme-slector-btns":"categories-slector-btns"} >
                  {biradari.value}
                </Button>
              ))}
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="categories-selector-text-div">
                <Title style={styles.darkThemText} level={4}>Maslak Wise Profiles</Title> <br />
                <hr style={styles.darkThemText} />
              </div>
              <div className="categories-slector-div">
              {maslakSlectBar.map((maslak) => (
                <Button className={darkMode ? "categories-darktheme-slector-btns":"categories-slector-btns"} >
                  {maslak.value}
                </Button>
              ))}
              </div>
            </Col>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default FilterForC;
