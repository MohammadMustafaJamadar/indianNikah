import { Alert, Card, Col, Pagination, Row } from "antd";
import { InfoCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Button } from "antd/es/radio";
import Typography from "antd/es/typography";
import { useEffect, useState } from "react";
import "../../css/searchPage.css";
import { users } from "../../utils/demoUsers";
import SearchFliter from "../search Components/SearchFliter";

export default function SearchPage() {
  const { Text, Title } = Typography;
  const [usersData, setUsersData] = useState([]);
  // const [currentUpdatedusersList,setCurrentUpdatedusersList]=
  const [totalusers, setTotalUsers] = useState("");
  const [page, setPage] = useState(1);
  const [usersPerPage, ] = useState(40);
  const [showFilter, setShowFliter] = useState(false);

  // all state variables of searchFilter
  const [genderSelect, setgenderSelect] = useState(null);
  const [educationSelect, setEducationSelect] = useState(null);
  const [biradariSelect, setbiradariSelect] = useState(null);
  const [ageGroup, setAgeGroup] = useState(null);
  const [maritalStatus, setMaritalStatus] = useState(null);
  const [maslak, setMaslak] = useState(null);
  const [selectState, setSelectState] = useState(null);
  const [exampleInput, setExampleInput] = useState(null);

  useEffect(() => {
    setUsersData(users);
    setTotalUsers(users.length);
  }, []);

  // pagination logic
  const indexOfLastPage = page + usersPerPage;
  const indexOfFirstPage = indexOfLastPage - usersPerPage;
  const currebtusers = usersData.slice(indexOfFirstPage, indexOfLastPage);

  const HandleFilter = () => {
    if (showFilter) {
      setShowFliter(false);
    } else {
      setShowFliter(true);
    }
  };
  return (
    <div
      style={{
        marginTop: "80px",
      }}
    >
      <Row justify="center">
        <Col xs={20} sm={20} md={18} lg={18}>
          <Alert
            style={{
              height: "60px",
              textAlign: "center",
              paddingBottom: "25px",
            }}
            message={
              <>
                <a href="https://youtu.be/nsrj-X5vbA0">
                  <Title level={5}>
                    <InfoCircleOutlined /> How to search profiles?
                  </Title>
                </a>
              </>
            }
            type="info"
          />
        </Col>
      </Row>
      {showFilter && (
        <SearchFliter
          genderSelect={genderSelect}
          setgenderSelect={setgenderSelect}
          educationSelect={educationSelect}
          setEducationSelect={setEducationSelect}
          biradariSelect={biradariSelect}
          setbiradariSelect={setbiradariSelect}
          ageGroup={ageGroup}
          setAgeGroup={setAgeGroup}
          maritalStatus={maritalStatus}
          setMaritalStatus={setMaritalStatus}
          maslak={maslak}
          setMaslak={setMaslak}
          selectState={selectState}
          setSelectState={setSelectState}
          exampleInput={exampleInput}
          setExampleInput={setExampleInput}
          showFilter={showFilter}
          setShowFliter={setShowFliter}
        />
      )}
      <Row justify="center">
        <Col>
          {!showFilter && (
            <Button
              type="text"
              onClick={HandleFilter}
              className="btn-top-filter"
              block
            >
              <SearchOutlined /> SEARCH
            </Button>
          )}
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={24} md={16} lg={16}>
          <Row justify="center">
            {currebtusers.map((user) => (
              <Col xs={24} sm={24} md={11} lg={11} key={user.id}>
                <Card
                  hoverable
                  bordered={true}
                  style={{
                    marginBottom: "10px",
                    marginLeft: "10px",
                  }}
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
                      <Text className="font-for-user-cards">{user.gender}</Text>
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
