import { Card, Col, Pagination, Row } from "antd";
import Typography from "antd/es/typography";
import { useEffect, useState } from "react";
import "../../css/searchPage.css";
import SearchFliterDec from "./SearchFliterDec";
import SearchFilterMobile from "./SearchFilterMobile";
import manimg from "../../images/man.jpg";
import womanimg from "../../images/woman.jpg";
import {
  fetchUserData,
  NextUsersData,
  PrevUsersData,
} from "../../utils/searchPageApis";

export default function SearchPage(props) {
  const { darkMode } = props;
  const { Text } = Typography;
  const [usersData, setUsersData] = useState([]);
  const [totalusers, setTotalUsers] = useState("");
  const [page, setPage] = useState(0);
  const [usersPerPage] = useState(20);
  const [fliterData, setFilterData] = useState({
    gender: "all",
    agegroup: "",
    education: [],
    biradari: [],
    maslak: [],
    matarnalstatus: [],
    state: [],
  });
  const [filteredUserData, setFilteredUserData] = useState([]);
  const [prevPageNumber, setPrevPageNumber] = useState(0);

  useEffect(() => {
    fetchUserData().then((res) => {
      console.log("data in askljsldk", res);
      setTotalUsers(res.data.count);
      setUsersData(res.data.results);
    });
  }, []);
  const changePage = (value) => {
    setPrevPageNumber(page);
    if (value > prevPageNumber) {
      setPage(value);
      NextUsersData(value)
        .then((res) => {
          console.log("res",res)
          setUsersData(res.data.results);
        })
        .catch(console.log);
    } else {
      setPage(value);
      PrevUsersData(value)
        .then((res) => {
          setUsersData(res.data.results);
        })
        .catch(console.log);
    }
  };

  useEffect(() => {
    if (
      fliterData.gender === "all" &&
      (fliterData.agegroup === "" ||
        fliterData.agegroup === null ||
        fliterData.agegroup === undefined) &&
      fliterData.education.length === 0 &&
      fliterData.biradari.length === 0 &&
      fliterData.maslak.length === 0 &&
      fliterData.matarnalstatus.length === 0 &&
      fliterData.state.length === 0
    ) {
      setFilteredUserData(usersData);
    } else {
      const filteredData = usersData.filter((user) => {
        if (user.gender === fliterData.gender) {
          return true;
        } else if (user.age_group === fliterData.agegroup) {
          return true;
        }
        return false;
      });
      setFilteredUserData(filteredData);
    }
  }, [usersData, fliterData]);

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
  const currebtusers = filteredUserData.slice(
    indexOfFirstPage,
    indexOfLastPage
  );
  console.log(usersData);

  return (
    <div
      style={{
        marginTop: "60px",
        backgroundColor: darkMode ? "rgb(22, 57, 90)" : "   #f2f2f2",
      }}
    >
      <Row justify="space-around">
        <Col xs={23} sm={23} md={23} lg={6} xl={5}>
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
        <Col xs={23} sm={23} md={23} lg={18} xl={18}>
          <Row justify="center">
            {currebtusers.map((user, index) => (
              <Col xs={24} sm={24} md={10} lg={10} xl={8} key={index}>
                <Card
                  hoverable
                  bordered={true}
                  className={
                    darkMode ? "card-userInfo-darkTheme" : "card-userInfo"
                  }
                  size="small"
                >
                  <Row justify="space-around">
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                      <img
                        src={
                          user.thumbnail === null
                            ? user.gender === "ML"
                              ? manimg
                              : womanimg
                            : user.thumbnail
                        }
                        className="user-image"
                        alt="Not available"
                        loading="lazy"
                      />
                    </Col>
                    <Col xs={16} sm={16} md={16} lg={16}>
                      <div className="users-card-detail-div">
                        <Text className="font-for-user-cards">
                          {user.full_name}
                        </Text>
                        <br />
                        <Text className="font-for-user-cards">
                          {user.occupation}
                        </Text>
                        <br />
                        <Text className="font-for-user-cards">
                          {user.biradari}({user.maslak})
                        </Text>
                        <br />
                        <Text className="font-for-user-cards">
                          {user.age}(
                          {user.city_native === user.city_current
                            ? user.city_native
                            : `${user.city_native} -> ${user.city_current}`}
                          )
                        </Text>
                      </div>
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
          showSizeChanger={false}
          total={totalusers}
          current={page}
          onChange={changePage}
        />
      </div>
    </div>
  );
}
