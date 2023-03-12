import React, { useState } from "react";
import {
  Col,
  Row,
  Input,
  Drawer,
  Form,
  Radio,
  Menu,
  Checkbox,
  Button,
  Slider,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
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

const SearchFilterMobile = (props) => {
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
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="fliter-of-search-input-mobile">
        <Input
          onClick={showDrawer}
          placeholder="Search"
          prefix={<SearchOutlined />}
        />
      </div>
      <Drawer
        placement={"bottom"}
        width={500}
        height={500}
        onClose={onClose}
        open={open}
      >
        <Form layout="vertical">
          <Row justify="start" style={{ marginLeft: "10px" }}>
            <Col xs={23} sm={23} md={23}>
              <Form.Item layout="vertical" label="Gender">
                <Radio.Group
                  name="gender"
                  onChange={filterChanger}
                  value={fliterData.gender}
                  options={selectGenderList}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24}>
              <Form.Item label="Age Group">
                <Row>
                  <Col xs={23} sm={23} md={23}>
                    <Slider marks={ageGroupSelectList} step={null} />
                  </Col>
                </Row>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24}>
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
                            key={2}
                          >
                            <Row>
                              {forGraduate.map((g, index) => {
                                return (
                                  <>
                                    <Col
                                      xs={12}
                                      sm={12}
                                      md={12}
                                      key={index.toString()}
                                    >
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
            <Col xs={24} sm={24} md={24}>
              <Form.Item>
                <Menu
                  style={{ width: "auto" }}
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
                            key={3}
                          >
                            <Row>
                              {forMaritalStatus.map((g, index) => {
                                return (
                                  <>
                                    <Col xs={12} sm={12} md={12} key={index}>
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
            <Col xs={24} sm={24} md={24}>
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
                            key={4}
                          >
                            <Row>
                              {biradariSlectBar.map((g, index) => {
                                return (
                                  <>
                                    <Col
                                      xs={12}
                                      sm={12}
                                      md={12}
                                      key={index.toString()}
                                    >
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
            <Col xs={24} sm={24} md={24}>
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
                            key={5}
                          >
                            <Row>
                              {maslakSlectBar.map((g, index) => {
                                return (
                                  <>
                                    <Col xs={12} sm={12} md={12} key={index}>
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
            <Col xs={24} sm={24} md={24}>
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
                            key={6}
                          >
                            <Row>
                              {states.map((g, index) => {
                                return (
                                  <>
                                    <Col
                                      xs={12}
                                      sm={12}
                                      md={12}
                                      key={index.toString()}
                                    >
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
            <Col xs={23} sm={23} md={23}>
              <div className="search-filter-mobile-btn-div">
                <Button className="search-filter-mobile-btn">
                  Apply filter
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default SearchFilterMobile;
