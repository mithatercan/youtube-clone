import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Category from "../Categories/Category";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";
import uuid from "react-uuid";
import ScrollContainer from "react-indiana-drag-scroll";
import PrevBtn from "../Buttons/PrevBtn";
import NextBtn from "../Buttons/NextBtn";
function Layout({
  children,
  setVideos,
  clearData,
  openInfo,
  isModalOpened,
  setCategoryId,
}) {
  const widthOfScreen = window.innerWidth;
  const [isOpened, setIsOpened] = useState(true);
  const [data, setData] = useState([]);

  // ! FOR SIDEBAR !
  const toggleIt = () => {
    if (isOpened) {
      setIsOpened(false);
    } else {
      setIsOpened(true);
    }
  };

  // ! GET CATEGORIES !
  useEffect(() => {
    if (widthOfScreen < 1000) {
      setIsOpened(false);
    }

    const fetchData = async () => {
      const response = await fetch("https://api.mocki.io/v1/4e07e1ee");
      const respData = await response.json();
      setData(respData.items);
    };

    fetchData();
  }, []);

  //!GET CATEGORY VIDEOS!
  function categoryGet(categoryId) {
    setCategoryId(categoryId);
  }

  return (
    <div>
      <Header
        sidebarToggle={() => toggleIt()}
        searchVideo={(e, inputValue) => setVideos(e, inputValue)}
        clearSearch={() => clearData()}
        info={() => openInfo()}
      />
      <div className="container">
        <Sidebar statu={isOpened} />
        <Main statu={isOpened}>
          <ScrollContainer className="main__categories">
            {data.map((item) => (
              <Category
                id={item.id}
                getViaCategory={(test) => categoryGet(test)}
                key={uuid()}
                category={item}
              />
            ))}
          </ScrollContainer>
          <div className="main__videos">{children}</div>
        </Main>
      </div>
      {isModalOpened ? (
        <div style={{ color: "red" }} className="modal">
          MODAL HERE
        </div>
      ) : null}
    </div>
  );
}

export default Layout;
