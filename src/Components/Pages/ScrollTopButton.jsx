import React, { useEffect, useState } from "react";
import { FloatButton } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import "../../css/floatButton.css";

const ScrollTopButton = (props) => {
  const { darkMode, colors } = props;
  const [isVisible, setIsVisible] = useState(false);
  const handelClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenScroll = () => {
    const heightHidden = 250;
    const scrollWin =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollWin > heightHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
  }, []);
  const styles = {
    backGround: {
      backgroundColor: darkMode
        ? "#001F3D"
        :colors.green
        ? "#48BA78"
        : colors.blue
        ? "#4D8FF6"
        : colors.purple
        ? "#9F7AEB" :"#df3768"
    },
  };
  return (
    <>
      {isVisible ? (
        <div  className="float-btn-div" style={styles.backGround}>
          <FloatButton
            className="float-btn"
            shape="circle"
            style={styles.backGround}
            onClick={handelClick}
            icon={<ArrowUpOutlined style={{ color: "white" }} />}
          />
        </div>
      ) : null}
    </>
  );
};

export default ScrollTopButton;
