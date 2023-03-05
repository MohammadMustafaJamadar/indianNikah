import { Button, Card, Col, Input, Row, Select } from "antd";
import {
  SearchOutlined,
  ClearOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
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

export default function SearchFliter(props) {
  const {
    genderSelect,
    setgenderSelect,
    educationSelect,
    setEducationSelect,
    biradariSelect,
    setbiradariSelect,
    ageGroup,
    setAgeGroup,
    maritalStatus,
    setMaritalStatus,
    maslak,
    setMaslak,
    exampleInput,
    setExampleInput,
    selectState,
    setSelectState,
    setShowFliter,
    darkMode,
  } = props;

  const handleSelectChangeGender = (value) => {
    setgenderSelect(value);
    console.log(typeof value);
  };
  const handleSelectChangeEducation = (value) => {
    setEducationSelect(value);
  };
  const handleSelectChangeBiradari = (value) => {
    setbiradariSelect(value);
  };
  const handleSelectChangeAgeGroup = (value) => {
    setAgeGroup(value);
  };
  const handleSelectChangeMaritalStatus = (value) => {
    setMaritalStatus(value);
  };
  const handleSelectChangeMaslak = (value) => {
    setMaslak(value);
  };
  const handleSelectChangeState = (value) => {
    setSelectState(value);
  };
  const handleExampleInput = (e) => {
    setExampleInput(e.target.value);
  };

  const handleExit = () => {
    setShowFliter(false);
  };
  const handleClear = () => {
    setgenderSelect(null);
    setEducationSelect(null);
    setbiradariSelect(null);
    setAgeGroup(null);
    setMaritalStatus(null);
    setMaslak(null);
    setSelectState(null);
    setExampleInput(null);
  };
  return (
    <div style={{ marginTop: "60px" }}>
      <Row justify="center">
        <Col sm={23} xs={23} md={23} lg={23}></Col>
        <Col xs={23} sm={23} md={23} lg={22} xl={16}>
          <Card className="card-userInfo" style={{backgroundColor:darkMode?"#071B2F":"white"}}>
            <Row justify="space-around">
              <Col sm={22} xs={22} md={11} lg={11}>
                <div className="dropdown">
                  <Select
                    placeholder="Gender"
                    value={genderSelect}
                    style={{
                      width: "100%",
                    }}
                    onChange={handleSelectChangeGender}
                    options={selectGenderList}
                  />
                </div>
                <div className="dropdown">
                  <Select
                    placeholder="Education"
                    value={educationSelect}
                    style={{
                      width: "100%",
                    }}
                    onChange={handleSelectChangeEducation}
                    options={forGraduate}
                  />
                </div>
                <div className="dropdown">
                  <Select
                    placeholder="Biradari"
                    value={biradariSelect}
                    style={{
                      width: "100%",
                    }}
                    onChange={handleSelectChangeBiradari}
                    options={biradariSlectBar}
                  />
                </div>
              </Col>
              <Col sm={22} xs={22} md={11} lg={11}>
                <div className="dropdown">
                  <Select
                    value={ageGroup}
                    placeholder="Age Group"
                    style={{
                      width: "100%",
                    }}
                    onChange={handleSelectChangeAgeGroup}
                    options={ageGroupSelectList}
                  />
                </div>
                <div className="dropdown">
                  <Select
                    placeholder="Marital Status"
                    value={maritalStatus}
                    style={{
                      width: "100%",
                    }}
                    onChange={handleSelectChangeMaritalStatus}
                    options={forMaritalStatus}
                  />
                </div>
                <div className="dropdown">
                  <Select
                    placeholder="Maslak"
                    value={maslak}
                    style={{
                      width: "100%",
                    }}
                    onChange={handleSelectChangeMaslak}
                    options={maslakSlectBar}
                  />
                </div>
              </Col>
              <Col sm={23} xs={23} md={23} lg={23}>
                <div className="dropdown">
                  <Select
                    placeholder="States"
                    value={selectState}
                    style={{
                      width: "100%",
                    }}
                    onChange={handleSelectChangeState}
                    options={states}
                  />
                </div>
              </Col>
            </Row>
            <Row justify="center">
              <Col sm={23} xs={23} md={23} lg={23}>
                <div className="input">
                  <Input
                    value={exampleInput}
                    onChange={handleExampleInput}
                    placeholder="Example: Doctor, Engineer, software, MBA, Akola , Mumbai, Namaz, Quran, deendar"
                  ></Input>
                </div>
              </Col>
            </Row>
            <Row justify="space-between" align="middle">
              <Col sm={6} xs={6} md={8} lg={8}>
                {" "}
                <Button
                  className="btn-searchfilter-exit"
                  icon={<CloseCircleOutlined />}
                  onClick={handleExit}
                  danger
                >
                  Exit
                </Button>
              </Col>
              <Col sm={16} xs={16} md={11} lg={11} flex="none">
                <Button
                  className="btn-searchfilter-clear"
                  icon={<ClearOutlined />}
                  onClick={handleClear}
                >
                  Clear
                </Button>{" "}
                <Button
                  className="btn-searchfilter-search"
                  icon={<SearchOutlined />}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
