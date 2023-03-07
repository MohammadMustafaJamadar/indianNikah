import { Card, Col, Pagination, Row, Form, Checkbox, Radio } from "antd";
// import { InfoCircleOutlined, SearchOutlined } from "@ant-design/icons";

import Typography from "antd/es/typography";
import { useEffect, useState } from "react";
import "../../css/searchPage.css";
import { users } from "../../utils/demoUsers";
import {
  selectGenderList,
  ageGroupSelectList,
  forGraduate,
  forMaritalStatus,
  biradariSlectBar,
  maslakSlectBar,
  states,
} from "../../utils/searchFliter";
// import SearchFliter from "./SearchFliter";

export default function SearchPage(props) {
  const { darkMode } = props;
  const { Text } = Typography;
  const [usersData, setUsersData] = useState([]);
  const [totalusers, setTotalUsers] = useState("");
  const [page, setPage] = useState(1);
  const [usersPerPage] = useState(40);
  // const [showFilter, setShowFliter] = useState(false);

  const [fliterData, setFilterData] = useState({
    gender: "",
    agegroup: [],
    education: [],
    biradari: [],
    maslak: [],
    matarnalstatus: [],
    state: [],
  });

  // all state variables of searchFilter
  // const [genderSelect, setgenderSelect] = useState();
  // const [educationSelect, setEducationSelect] = useState();
  // const [biradariSelect, setbiradariSelect] = useState();
  // const [ageGroup, setAgeGroup] = useState();
  // const [maritalStatus, setMaritalStatus] = useState();
  // const [maslak, setMaslak] = useState();
  // const [selectState, setSelectState] = useState();
  // const [exampleInput, setExampleInput] = useState();

  // const [searchData,setSearchData]=useState({})

  useEffect(() => {
    setUsersData(users);
    setTotalUsers(users.length);
  }, []);

  const filterChanger = (param) => {
    const { name, value } = param.target;
    setFilterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const changeEducation = (value) => {
    setFilterData((prev) => ({
      ...prev,
      education: value,
    }));
  };

  const changeBiradari = (value) => {
    setFilterData((prev) => ({
      ...prev,
      biradari: value,
    }));
  };

  const changeMaslak = (value) => {
    setFilterData((prev) => ({
      ...prev,
      maslak: value,
    }));
  };

  const changeAgeGroup = (value) => {
    setFilterData((prev) => ({
      ...prev,
      agegroup: value,
    }));
  };
  const changeMatarnalstatus = (value) => {
    setFilterData((prev) => ({
      ...prev,
      matarnalstatus: value,
    }));
  };
  const changeState = (value) => {
    setFilterData((prev) => ({
      ...prev,
      state: value,
    }));
  };

  // pagination logic
  const indexOfLastPage = page + usersPerPage;
  const indexOfFirstPage = indexOfLastPage - usersPerPage;
  const currebtusers = usersData.slice(indexOfFirstPage, indexOfLastPage);

  console.log(fliterData);
  return (
    <div
      style={{
        marginTop: "60px",
        backgroundColor: darkMode ? "rgb(22, 57, 90)" : "white",
      }}
    >
      <Row justify="space-around">
        <Col lg={5} xl={5}>
          <div style={{ width: "100%" }} className="fliter-of-search">
            <Form layout="vertical">
              <Row justify="start" style={{ marginLeft: "10px" }}>
                <Col lg={24} xl={24} xxl={24}>
                  <Form.Item layout="vertical" label="Gender" key={1}>
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
                              <Col lg={12} xl={12}>
                                <Checkbox Col={4} key={index} value={g.value}>
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
                  <Form.Item label="Education" key={3}>
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
                              <Col lg={12} xl={12}>
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
                  <Form.Item key={4} label="Marital Status">
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
                              <Col lg={12} xl={12}>
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
                  <Form.Item key={5} label="Biradari">
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
                              <Col lg={12} xl={12}>
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
                  <Form.Item key={6} label="Maslak">
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
                              <Col lg={12} xl={12}>
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
                  <Form.Item key={7} label="State">
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
                              <Col lg={12} xl={12}>
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
              </Row>
            </Form>
          </div>
        </Col>
        <Col xs={23} sm={23} md={23} lg={19} xl={19}>
          <Row justify="center">
            {currebtusers.map((user) => (
              <Col xs={24} sm={24} md={8} lg={8} xl={8} key={user.id}>
                <Card
                  hoverable
                  bordered={true}
                  className={
                    darkMode ? "card-userInfo-darkTheme" : "card-userInfo"
                  }
                  size="small"
                >
                  <Row justify="space-around">
                    <Col xs={6} sm={6} md={6} lg={6}>
                      <img
                        src={user.img}
                        style={{
                          marginTop: "8px",
                          height: "auto",
                          width: "100%",
                        }}
                        alt="No...!"
                        loading="lazy"
                      />
                    </Col>
                    <Col xs={16} sm={16} md={16} lg={16}>
                      <Text className="font-for-user-cards">{user.name}</Text>
                      <br />
                      <Text className="font-for-user-cards">{user.work}</Text>
                      <br />
                      <Text className="font-for-user-cards">{user.maslak}</Text>
                      <br />
                      <Text className="font-for-user-cards">{user.age}</Text>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                      <p>NRI</p>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <div className="pagination">
        <Pagination
          pageSize={usersPerPage}
          total={totalusers}
          current={page}
          onChange={(value) => setPage(value)}
        />
      </div>
    </div>
  );
}
