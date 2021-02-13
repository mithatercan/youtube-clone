import React from "react";
import StyledLink from "../Buttons/StyledLink";
import { FaHotjar, FaHistory, FaPlayCircle, FaVideo } from "react-icons/fa";
import { AiFillHome, AiFillLike } from "react-icons/ai";
import { MdLibraryMusic, MdWatchLater } from "react-icons/md";
function Sidebar({ statu }) {
  return statu ? (
    <div className="sidebar">
      <ul>
        <StyledLink to="/">
          <li>
            <AiFillHome className="sidebar__icon" size={22} />
            <span>Home</span>
          </li>
        </StyledLink>
        <StyledLink to="/trending">
          <li>
            <FaHotjar className="sidebar__icon" size={22} />
            <span>Trending</span>
          </li>
        </StyledLink>

        <StyledLink to="/history">
          <li>
            <FaHistory className="sidebar__icon" size={22} />
            <span>History</span>
          </li>
        </StyledLink>
        <StyledLink to="/libary">
          <li>
            <MdLibraryMusic className="sidebar__icon" size={24} />
            <span>Libary</span>
          </li>
        </StyledLink>
      </ul>
      <ul>
        <StyledLink to="/music">
          <li>
            <FaPlayCircle className="sidebar__icon" size={22} />
            <span>Music</span>
          </li>
        </StyledLink>
        <StyledLink to="/your?videos">
          <li>
            <FaVideo className="sidebar__icon" size={22} />
            <span>Videos</span>
          </li>
        </StyledLink>
        <StyledLink to="/liked">
          <li>
            <AiFillLike className="sidebar__icon" size={22} />
            <span>Liked </span>
          </li>
        </StyledLink>
        <StyledLink to="/music">
          <li>
            <MdWatchLater className="sidebar__icon" size={24} />
            <span>Later</span>
          </li>
        </StyledLink>
      </ul>
      <ul>
        <StyledLink to="/music">
          <li>
            <FaPlayCircle className="sidebar__icon" size={22} />
            <span>Music</span>
          </li>
        </StyledLink>
        <StyledLink to="/your?videos">
          <li>
            <FaVideo className="sidebar__icon" size={22} />
            <span>Videos</span>
          </li>
        </StyledLink>
        <StyledLink to="/liked">
          <li>
            <AiFillLike className="sidebar__icon" size={22} />
            <span>Liked </span>
          </li>
        </StyledLink>
        <StyledLink to="/music">
          <li>
            <MdWatchLater className="sidebar__icon" size={24} />
            <span>Later</span>
          </li>
        </StyledLink>
      </ul>
    </div>
  ) : null;
}

export default Sidebar;
