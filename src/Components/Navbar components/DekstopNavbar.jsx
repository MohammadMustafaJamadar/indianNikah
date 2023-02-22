import React from "react";
import { Typography, Dropdown } from "antd";
import { Link } from "react-router-dom";
import {
  HeartOutlined,
  SearchOutlined,
  ReadOutlined,
  IdcardOutlined,
  MessageOutlined,
  InfoCircleOutlined,
  PlusCircleOutlined,
  BarsOutlined,
  FileTextOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "../../css/navbar.css";

const { Text } = Typography;
const items = [
  {
    key: "1",
    label: (
      <Link aria-current="page" to="/jobsupport">
        Job Supprt
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link aria-current="page" to="/scholarship">
        Scholarship
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link aria-current="page" to="/accomodation">
        Accomodation
      </Link>
    ),
  },
];

export default function DekstopNavbar(props) {
  const { darkMode } = props;

  const styles = {
    darkModes: {
      darkText: { color: darkMode ? "white" : "black" },
    },
  };

  return (
    <>
      <ul
        className={
          darkMode ? "nav-links-ul-dek-mod-darkmode" : "nav-links-ul-dek-mod"
        }
      >
        <li>
          <Link aria-current="page" to="/favourites/list/">
            <Text style={styles.darkModes.darkText}  type="primary" strong>
            <HeartOutlined  /> {" "}   Favourites
            </Text>
          </Link>
        </li>
        <li>
          <Link aria-current="page" to="/profiles/">
            <Text style={styles.darkModes.darkText} type="primary" strong>
            <SearchOutlined />  {" "}  Search Profiles 
            </Text>
          </Link>
        </li>
        <li>
          <Link aria-current="page" to="/guidelines/r/">
            <Text style={styles.darkModes.darkText} type="primary" strong>
            <ReadOutlined  /> {" "}   Marriage Guidelines  
            </Text>
          </Link>
        </li>
        <li>
          <Dropdown menu={{ items, selectable: true }} trigger={["click"]}>
            <Typography.Link strong style={styles.darkModes.darkText}>
              <IdcardOutlined /> Supports <DownOutlined />
            </Typography.Link>
          </Dropdown>
        </li>
        <li>
          <Link aria-current="page" to="/feedbacks/post-feedback/ ">
            <Text style={styles.darkModes.darkText} type="primary" strong>
              
            <MessageOutlined  /> {" "}  feedbacks
            </Text>
          </Link>
        </li>
        <li>
          <Link aria-current="page" to="/about-us/">
            <Text style={styles.darkModes.darkText} type="primary" strong>
            <InfoCircleOutlined  />  {" "} About Us
            </Text>
          </Link>
        </li>

        <li>
          <Link aria-current="page" to="/profiles/newly-added-profiles">
            <Text style={styles.darkModes.darkText} type="primary" strong>
              
            <PlusCircleOutlined /> {" "}   New Profiles   
            </Text>
          </Link>
        </li>
        <li>
          <Link aria-current="page" to="/profiles/profile-categories">
            <Text style={styles.darkModes.darkText} type="primary" strong>
            <BarsOutlined  /> {" "}   Categories 
            </Text>
          </Link>
        </li>
        <li>
          <Link aria-current="page" to="/post-document-service/">
            <Text style={styles.darkModes.darkText} type="primary" strong>
            <FileTextOutlined  /> {" "}   Document Service 
            </Text>
          </Link>
        </li>
      </ul>
    </>
  );
}
