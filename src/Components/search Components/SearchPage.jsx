import { Card, Col, Pagination, Row, Input } from "antd";
import Typography from "antd/es/typography";
import { useEffect, useState } from "react";

import "../../css/searchPage.css";
import { users } from "../../utils/demoUsers";
import SearchFliterDec from "./SearchFliterDec";
import SearchFilterMobile from "./SearchFilterMobile";

export default function SearchPage(props) {
  const { darkMode } = props;
  const { Text } = Typography;
  const [usersData, setUsersData] = useState([]);
  const [totalusers, setTotalUsers] = useState("");
  const [page, setPage] = useState(1);
  const [usersPerPage] = useState(40);

  const [fliterData, setFilterData] = useState({
    gender: "",
    agegroup: [],
    education: [],
    biradari: [],
    maslak: [],
    matarnalstatus: [],
    state: [],
  });

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

  return (
    <div
      style={{
        marginTop: "60px",
        backgroundColor: darkMode ? "rgb(22, 57, 90)" : "   #f2f2f2",
      }}
    >
      <Row
        justify="space-around"
      >
        <Col xs={23} sm={23} md={23} lg={5} xl={5}>
          <SearchFliterDec
            fliterData={fliterData}
            filterChanger={filterChanger}
            changeEducation={changeEducation}
            changeBiradari={changeBiradari}
            changeMaslak={changeMaslak}
            changeAgeGroup={changeAgeGroup}
            changeMatarnalstatus={changeMatarnalstatus}
            changeState={changeState}
          />
          <div className="fliter-of-search-mobile">
            <SearchFilterMobile
              fliterData={fliterData}
              filterChanger={filterChanger}
              changeEducation={changeEducation}
              changeBiradari={changeBiradari}
              changeMaslak={changeMaslak}
              changeAgeGroup={changeAgeGroup}
              changeMatarnalstatus={changeMatarnalstatus}
              changeState={changeState}
            />
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
