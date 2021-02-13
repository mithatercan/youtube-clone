import React, { useState, useEffect } from "react";
import StyledLink from "../Buttons/StyledLink";
import { FaBell, FaCloudUploadAlt } from "react-icons/fa";
import { MdApps, MdSearch } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import Profile from "../../Assets/images/profile.jpg";

function Header({ sidebarToggle, searchVideo, clearSearch, info }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__nav--left header__nav--logo">
          <FiMenu
            className="header__nav--burger"
            size={22}
            onClick={() => sidebarToggle()}
          />
          <StyledLink onClick={() => clearSearch()} to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="style-scope yt-icon"
              display="block"
              pointerEvents="none"
              viewBox="0 0 98 24"
              style={{ width: "100px", height: "30px" }}
            >
              <g className="style-scope yt-icon">
                <g className="style-scope yt-icon">
                  <path
                    fill="red"
                    d="M28.4 5.12a3.57 3.57 0 00-2.55-2.52C23.62 2 14.68 2 14.68 2s-8.93 0-11.16.6A3.565 3.565 0 001 5.12C.59 7.39.39 9.69.4 12c-.01 2.31.19 4.61.6 6.88a3.565 3.565 0 002.52 2.52c2.23.6 11.16.6 11.16.6s8.93 0 11.16-.6a3.583 3.583 0 002.56-2.52c.41-2.27.61-4.57.6-6.88.01-2.31-.19-4.61-.6-6.88z"
                    style={{ DarkreaderInlineFill: "#ff1a1a" }}
                    className="style-scope yt-icon"
                  ></path>
                  <path
                    fill="#FFF"
                    style={{ DarkreaderInlineFill: "#e8e6e3" }}
                    d="M11.83 16.29L19.25 12l-7.42-4.29z"
                    className="style-scope yt-icon"
                  ></path>
                </g>
                <g className="style-scope yt-icon">
                  <path
                    d="M41.67 8.35V9c0 3.45-1.53 5.48-4.88 5.48h-.51v6h-2.74V3.42h3.49c3.19 0 4.64 1.35 4.64 4.93zm-2.88.25c0-2.49-.45-3.09-2-3.09h-.51v7h.47c1.47 0 2-1.06 2-3.37l.04-.54zm9.35-.77L48 11.08c-1.17-.24-2.13-.08-2.6.69v8.78h-2.67V8h2.17l.24 2.71h.1c.28-2 1.2-3 2.39-3 .17.02.35.06.51.12zm3.13 7.42v.63c0 2.21.12 3 1.06 3s1.1-.69 1.12-2.12l2.43.14c.18 2.7-1.23 3.9-3.61 3.9-2.9 0-3.76-1.9-3.76-5.35v-2.23c0-3.64 1-5.41 3.84-5.41s3.64 1.51 3.64 5.29v2.15h-4.72zm0-2.58v.9h2.06v-.89c0-2.3-.16-3-1-3s-1 .67-1 3l-.06-.01zm18.75-1.57v9.46H67.2v-9.25c0-1-.27-1.53-.88-1.53-.54.02-1.02.34-1.25.82.01.17.01.34 0 .51v9.46h-2.79v-9.26c0-1-.27-1.53-.88-1.53-.53.02-1 .33-1.23.8v10H57.4V8h2.23l.25 1.59a3.18 3.18 0 012.86-1.86c1.05-.07 1.98.67 2.16 1.7a3.184 3.184 0 012.76-1.66c1.74.01 2.36 1.23 2.36 3.33zm1.38-6.27c0-1.35.49-1.74 1.53-1.74s1.53.45 1.53 1.74-.47 1.74-1.53 1.74-1.53-.35-1.53-1.74zM71.59 8h2.7v12.56h-2.7V8zM83.5 8v12.56h-2.2L81.05 19h-.06a2.857 2.857 0 01-2.7 1.74c-1.67 0-2.43-1.06-2.43-3.37V8h2.82v9.19c0 1.1.23 1.55.8 1.55.52-.02.98-.33 1.2-.8V8h2.82zm14.3 3.1v9.46h-2.82v-9.25c0-1-.27-1.53-.88-1.53-.54.02-1.02.34-1.25.82.01.17.01.34 0 .51v9.46h-2.79v-9.26c0-1-.27-1.53-.88-1.53-.53.02-1 .33-1.23.8v10h-2.81V8h2.26l.24 1.59a3.18 3.18 0 012.86-1.86c1.04-.07 1.97.64 2.17 1.66.55-.99 1.6-1.61 2.73-1.62 1.75.01 2.4 1.23 2.4 3.33z"
                    className="style-scope yt-icon"
                  ></path>
                </g>
              </g>
            </svg>
          </StyledLink>
        </div>

        <form
          onSubmit={(e) => searchVideo(e, inputValue)}
          className="header__nav--mid header__search "
        >
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button>
            <MdSearch size={24} style={{ color: "#c4c4c4" }} />
          </button>
        </form>

        <div className="header__nav--right header__nav--side">
          <StyledLink to="/add&video?id=?">
            <FaBell className="header__icon" size={20} />
          </StyledLink>

          <StyledLink to="/applications">
            <FaCloudUploadAlt className="header__icon" size={24} />
          </StyledLink>

          <StyledLink>
            <MdApps className="header__icon" size={24} />
          </StyledLink>

          <img
            onClick={() => info()}
            className="header__nav--profile"
            src={Profile}
            alt=""
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
