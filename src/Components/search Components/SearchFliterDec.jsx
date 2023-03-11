import { Col, Row, Form, Checkbox, Radio, Menu, Button } from "antd";
// import { useEffect, useState } from "react";
import "../../css/searchPage.css";
import {
  ageGroupSelectList,
  biradariSlectBar,
  forGraduate,
  forMaritalStatus,
  maslakSlectBar,
  selectGenderList,
  states,
} from "../../utils/searchFliter";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

export default function SearchFliter(props) {
  // const [scroll, setScroll] = useState();
  // const [clasNameSearch, setClassNameSearch] = useState("fliter-of-search-dek");
  const {
    fliterData,
    filterChanger,
    changeEducation,
    changeBiradari,
    changeMaslak,
    changeAgeGroup,
    changeMatarnalstatus,
    changeState,
  } = props;
  // const hadelScroll = () => {
  //   const scrollPosition = window.scrollY;
  //   setScroll(scrollPosition);
  // };
  // useEffect(() => {
  //   hadelScroll();
  //   const scrollPosEvent = window.addEventListener("scroll", hadelScroll);
  //   console.log(scrollPosEvent);
  //   if(scroll > 1710){
  //     setClassNameSearch("fliter-of-search-dek-relativePos")
  //   }else{
  //     setClassNameSearch("fliter-of-search-dek")
  //   }
  // }, [scroll,clasNameSearch]);


  return (
    <>
      <div className="fliter-of-search-dek">
        <Form layout="vertical">
          <Row justify="start" style={{ marginLeft: "10px" }}>
            <Col lg={24} xl={24} xxl={24}>
              <Form.Item layout="vertical" label="Gender">
                <Radio.Group
                  key={99}
                  name="gender"
                  onChange={filterChanger}
                  value={fliterData.gender}
                  options={selectGenderList}
                />
              </Form.Item>
            </Col>
            <Col lg={24} xl={24} xxl={24}>
              <Form.Item label="Age Group" key={994}>
                <Checkbox.Group
                  value={fliterData.agegroup}
                  onChange={changeAgeGroup}
                  style={{
                    width: "100%",
                  }}
                >
                  <Row>
                    {ageGroupSelectList.map((g, index) => {
                      return (
                        <>
                          <Col lg={12} xl={12} key={index}>
                            <Checkbox Col={4} value={g.value}>
                              {g.label}
                            </Checkbox>
                          </Col>
                        </>
                      );
                    })}
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Col>
            <Col lg={24} xl={24} xxl={24}>
              <Form.Item>
                <Menu
                  mode="inline"
                  items={[
                    getItem("Education", null, null, [
                      getItem(
                        <>
                          {" "}
                          <Checkbox.Group
                            value={fliterData.education}
                            name="education"
                            onChange={changeEducation}
                            style={{
                              width: "100%",
                            }}
                          >
                            <Row>
                              {forGraduate.map((g, index) => {
                                return (
                                  <>
                                    <Col lg={12} xl={12} key={index}>
                                      <Checkbox Col={4} value={g.value}>
                                        {g.label}
                                      </Checkbox>
                                    </Col>
                                  </>
                                );
                              })}
                            </Row>
                          </Checkbox.Group>
                        </>,
                        null,
                        null,
                        null,
                        "group"
                      ),
                    ]),
                  ]}
                />
              </Form.Item>
            </Col>
            <Col lg={24} xl={24} xxl={24}>
              <Form.Item>
                <Menu
                  mode="inline"
                  items={[
                    getItem("Marital Status", null, null, [
                      getItem(
                        <>
                          <Checkbox.Group
                            value={fliterData.matarnalstatus}
                            name="matarnalstatus"
                            onChange={changeMatarnalstatus}
                            style={{
                              width: "100%",
                            }}
                          >
                            <Row>
                              {forMaritalStatus.map((g, index) => {
                                return (
                                  <>
                                    <Col lg={12} xl={12} key={index}>
                                      <Checkbox Col={4} value={g.value}>
                                        {g.label}
                                      </Checkbox>
                                    </Col>
                                  </>
                                );
                              })}
                            </Row>
                          </Checkbox.Group>
                        </>,
                        null,
                        null,
                        null,
                        "group"
                      ),
                    ]),
                  ]}
                />
              </Form.Item>
            </Col>
            <Col lg={24} xl={24} xxl={24}>
              <Form.Item>
                <Menu
                  mode="inline"
                  items={[
                    getItem("Biradari", null, null, [
                      getItem(
                        <>
                          <Checkbox.Group
                            value={fliterData.biradari}
                            name="biradari"
                            onChange={changeBiradari}
                            style={{
                              width: "100%",
                            }}
                          >
                            <Row>
                              {biradariSlectBar.map((g, index) => {
                                return (
                                  <>
                                    <Col lg={12} xl={12} key={index}>
                                      <Checkbox Col={4} value={g.value}>
                                        {g.label}
                                      </Checkbox>
                                    </Col>
                                  </>
                                );
                              })}
                            </Row>
                          </Checkbox.Group>
                        </>,
                        null,
                        null,
                        null,
                        "group"
                      ),
                    ]),
                  ]}
                />
              </Form.Item>
            </Col>
            <Col lg={24} xl={24} xxl={24}>
              <Form.Item>
                <Menu
                  mode="inline"
                  items={[
                    getItem("Maslak", null, null, [
                      getItem(
                        <>
                          <Checkbox.Group
                            value={fliterData.maslak}
                            name="biradari"
                            onChange={changeMaslak}
                            style={{
                              width: "100%",
                            }}
                          >
                            <Row>
                              {maslakSlectBar.map((g, index) => {
                                return (
                                  <>
                                    <Col lg={12} xl={12} key={index}>
                                      <Checkbox Col={4} value={g.value}>
                                        {g.label}
                                      </Checkbox>
                                    </Col>
                                  </>
                                );
                              })}
                            </Row>
                          </Checkbox.Group>
                        </>,
                        null,
                        null,
                        null,
                        "group"
                      ),
                    ]),
                  ]}
                />
              </Form.Item>
            </Col>
            <Col lg={24} xl={24} xxl={24}>
              <Form.Item>
                <Menu
                  mode="inline"
                  items={[
                    getItem("State", null, null, [
                      getItem(
                        <>
                          <Checkbox.Group
                            value={fliterData.state}
                            name="state"
                            onChange={changeState}
                            style={{
                              width: "100%",
                            }}
                          >
                            <Row>
                              {states.map((g, index) => {
                                return (
                                  <>
                                    <Col lg={12} xl={12} key={index}>
                                      <Checkbox Col={4} value={g.value}>
                                        {g.label}
                                      </Checkbox>
                                    </Col>
                                  </>
                                );
                              })}
                            </Row>
                          </Checkbox.Group>
                        </>,
                        null,
                        null,
                        null,
                        "group"
                      ),
                    ]),
                  ]}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24}>
              <div className="search-filter-dec-btn-div">
                <Button className="search-filter-dec-btn">Apply filter</Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}
