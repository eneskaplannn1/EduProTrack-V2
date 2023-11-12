import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

import { PiStudentBold } from "react-icons/pi";
import { MdAssignment } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi2";

import { GiTeacher } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { SiGoogleclassroom } from "react-icons/si";
import { useAuth } from "../context/AuthProvider";

function Sidebar() {
  const { user } = useAuth();
  return (
    <StyledSidebar>
      <ul>
        <li>
          <StyledNavLink to="/profile">
            <CgProfile />
            <span>Profile</span>
          </StyledNavLink>
        </li>
        {user.role !== "Student" && (
          <li>
            <StyledNavLink to="/students">
              <PiStudentBold />
              <span>Students</span>
            </StyledNavLink>
          </li>
        )}
        {user.role === "Admin" && (
          <li>
            <StyledNavLink to="/teachers">
              <GiTeacher />
              <span>Teachers</span>
            </StyledNavLink>
          </li>
        )}
        <li>
          <StyledNavLink to="/homeworks">
            <MdAssignment />
            <span>Homeworks</span>
          </StyledNavLink>
        </li>
        {user.role === "Teacher" && (
          <li>
            <StyledNavLink to={`/classes/${user.class}`}>
              <SiGoogleclassroom />
              <span>Classroom</span>
            </StyledNavLink>
          </li>
        )}
        {user.role === "Admin" && (
          <li>
            <StyledNavLink to="/classes" end>
              <SiGoogleclassroom /> <span>Classes</span>
            </StyledNavLink>
          </li>
        )}
        <li>
          <StyledNavLink to="/account" end>
            <HiOutlineUser />
            <span>Account</span>
          </StyledNavLink>
        </li>
      </ul>
    </StyledSidebar>
  );
}
const StyledSidebar = styled.div`
  background-color: var(--color-grey-50);
  padding: 2rem 1rem;
  grid-row: 2 / 3;

  border-right: 1px solid var(--color-grey-100);

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1rem 2rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: #51e15f;
  }
`;

export default Sidebar;
