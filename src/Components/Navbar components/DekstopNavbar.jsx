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
  return (
    <>
      <ul
        className={
          darkMode ? "nav-links-ul-dek-mod-darkmode" : "nav-links-ul-dek-mod"
        }
      >
        <li>
          <Link aria-current="page" to="/login">
            <Text
              style={{ color: darkMode ? "white" : "black" }}
              type="primary"
              strong
            >
              <HeartOutlined /> Favourites
            </Text>
          </Link>
        </li>
        <li>
          <Link aria-current="page" to="/signup">
            <Text
              style={{ color: darkMode ? "white" : "black" }}
              type="primary"
              strong
            >
              <SearchOutlined /> Search Profiles
            </Text>
          </Link>
        </li>
        <li>
          <Link aria-current="page" to="/signup">
            <Text
              style={{ color: darkMode ? "white" : "black" }}
              type="primary"
              strong
            >
              <ReadOutlined /> Marriage Guidelines
            </Text>
          </Link>
        </li>
        <li>
          <Dropdown menu={{ items, selectable: true }}>
            <Typography.Link
              strong
              style={{ color: darkMode ? "white" : "black" }}
            >
              <IdcardOutlined /> Supports <DownOutlined />
            </Typography.Link>
          </Dropdown>
        </li>
        <li>
          <Link aria-current="page" to="/signup ">
            <Text
              style={{ color: darkMode ? "white" : "black" }}
              type="primary"
              strong
            >
              <MessageOutlined />
              &nbsp; feedbacks
            </Text>
          </Link>
        </li>
        <li>
          <Link aria-current="page" to="/signup">
            <Text
              style={{ color: darkMode ? "white" : "black" }}
              type="primary"
              strong
            >
              <InfoCircleOutlined /> About Us
            </Text>
          </Link>
        </li>

        <li>
          <Link aria-current="page" to="/signup">
            <Text
              style={{ color: darkMode ? "white" : "black" }}
              type="primary"
              strong
            >
              <PlusCircleOutlined />
              &nbsp; New Profiles
            </Text>
          </Link>
        </li>
        <li>
          <Link aria-current="page" to="/signup">
            <Text
              style={{ color: darkMode ? "white" : "black" }}
              type="primary"
              strong
            >
              <BarsOutlined /> Categories
            </Text>
          </Link>
        </li>
        <li>
          <Link aria-current="page" to="/signup">
            <Text
              style={{ color: darkMode ? "white" : "black" }}
              type="primary"
              strong
            >
              <FileTextOutlined /> Document Service
            </Text>
          </Link>
        </li>
      </ul>
    </>
  );
}
