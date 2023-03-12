import { Col, Row, Form, Checkbox, Radio, Menu, Slider } from "antd";

import "../../css/searchPage.css";
import {
  biradariSlectBar,
  forGraduate,
  forMaritalStatus,
  maslakSlectBar,
  selectGenderList,
  states,
} from "../../utils/searchFliter";

const ageGroupSelectList = {
  12: {
    label: <p>18-21</p>,
  },
  28: {
    label: <p>22-25</p>,
  },
  42: {
    label: <p>26-29 </p>,
  },
  56: {
    label: <p>30-33 </p>,
  },
  70: {
    label: <p>34-40</p>,
  },
  85: {
    label: <p>40+</p>,
  },
  100: {
    label: <p>30+ Unmarried</p>,
  },
};

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

  return (
    <>
      <div className="fliter-of-search-dek">
        <Form layout="vertical">
          <Row justify="start" style={{ marginLeft: "10px" }}>
            <Col lg={24} xl={24} xxl={24}>
              <Form.Item layout="vertical" label="Gender">
                <Radio.Group
                  name="gender"
                  onChange={filterChanger}
                  value={fliterData.gender}
                  options={selectGenderList}
                />
              </Form.Item>
            </Col>
            <Col lg={24} xl={24} xxl={24}>
              <Form.Item label="Age Group">
                <Row>
                  <Col lg={22} xl={22} xxl={22}>
                    <Slider marks={ageGroupSelectList} step={null} />
                  </Col>
                </Row>
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
                                      <Checkbox value={g.value}>
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
                                      <Checkbox value={g.value}>
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
                                      <Checkbox value={g.value}>
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
                                      <Checkbox value={g.value}>
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
                                      <Checkbox value={g.value}>
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
          </Row>
        </Form>
      </div>
    </>
  );
}
