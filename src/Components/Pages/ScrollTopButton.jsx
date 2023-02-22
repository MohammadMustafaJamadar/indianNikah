import React, { useEffect, useState } from "react";
import { FloatButton } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import "../../css/floatButton.css"

const ScrollTopButton = () => {
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
  return (
    <>
      {isVisible ? (
        <div className="float-btn-div">

          <FloatButton
          className="float-btn"
            shape="circle"
            onClick={handelClick}
            icon={<ArrowUpOutlined />}
    
            />
        </div>
      ) : null}
    </>
  );
};

export default ScrollTopButton;
