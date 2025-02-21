import { NavLink } from "react-router";
import styled from "styled-components";
import {
  HiOutlineHome,
  HiOutlineFolderOpen,
  HiOutlineStar,
} from "react-icons/hi";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import "../styles/MainNav.css";
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: #d1d5db;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    text-decoration: none;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color:#1f2937;
    background-color: #f9fafb;
    border-radius: 5px;
    text-decoration: none;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #9ca3af;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: #4f46e5;
  }
`;
function MainNav() {
  return (
    <ul className="navList">
      <li>
        <StyledNavLink to="/home">
          <HiOutlineHome />
          <span>Home</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/files">
          <HiOutlineFolderOpen />
          <span>All Files</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/starred">
          <HiOutlineStar />
          <span>Starred</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/archived">
          <HiOutlineArchiveBox />
          <span>Archived</span>
        </StyledNavLink>
      </li>
    </ul>
  );
}

export default MainNav;
