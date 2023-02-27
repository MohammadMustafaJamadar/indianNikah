import { Card, Col, Pagination, Row, Button } from "antd";
import {} from "@ant-design/icons";
import Typography from "antd/es/typography";
import { useEffect, useState } from "react";
import "../../css/categories.css";
import { users } from "../../utils/demoUsers";
import CategoriesSelectors from "./CategoriesSelectors";

const { Text } = Typography;

export default function CategoriesPage() {
  const [usersData, setUsersData] = useState([]);
  const [totalusers, setTotalUsers] = useState("");
  const [page, setPage] = useState(1);
  const [usersPerPage] = useState(40);
  const [showFilter, setShowFliter] = useState(false);

  useEffect(() => {
    setUsersData(users);
    setTotalUsers(users.length);
  }, []);

  // pagination logic
  const indexOfLastPage = page + usersPerPage;
  const indexOfFirstPage = indexOfLastPage - usersPerPage;
  const currebtusers = usersData.slice(indexOfFirstPage, indexOfLastPage);

  const handelSeeCategories = () => {
    if (showFilter) {
      setShowFliter(false);
    } else {
      setShowFliter(true);
    }
  };

  return (
    <>
      <div style={{ marginTop: "70px" }}>
        {showFilter && <CategoriesSelectors />}
        <Row justify="center">
          <Col>
            {showFilter ? (
              <Button
                onClick={handelSeeCategories}
                className="categories-slector-btns"
                shape="round"
                danger
              >
                Exit
              </Button>
            ) : (
              <Button
                onClick={handelSeeCategories}
                shape="round"
                className="btn-top-filter"
              >
                See Category Wise Profiles
              </Button>
            )}
          </Col>
        </Row>
        <hr style={{ width: "50%" }} />
        <Row justify="center" style={{ marginTop: "10px" }}>
          <Col xs={24} sm={24} md={20} lg={20} xl={16}>
            <div className="categories-selector-text-div">
              <Text>Showing 5605 Profiles(40 per page)</Text>
            </div>
            <br /> <br />
            <Row justify="center">
              {currebtusers.map((user) => (
                <Col xs={24} sm={24} md={12} lg={12} key={user.id}>
                  <Card hoverable className="card-userInfo" size="small">
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
                        <Text className="font-for-user-cards">
                          {user.gender}
                        </Text>
                        <br />
                        <Text className="font-for-user-cards">
                          {user.maslak}
                        </Text>
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
    </>
  );
}
