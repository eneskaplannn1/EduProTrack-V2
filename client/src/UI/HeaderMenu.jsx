import { useNavigate } from "react-router-dom";
import User from "./User";

import { HiOutlineUser } from "react-icons/hi2";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { BsMoon } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { styled } from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkmodeProvider";

function HeaderMenu({ logout }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();

  function handleLogout() {
    toast.success("logged out successfully");
    logout();
    navigate("/login");
  }

  return (
    <NavBar>
      <User />
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon onClick={toggleDarkMode}>
          <BsMoon />
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon onClick={handleLogout}>
          <HiArrowRightOnRectangle />
        </ButtonIcon>
      </li>
    </NavBar>
  );
}

export default HeaderMenu;

const NavBar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;

  li {
    display: flex;
    align-items: center;
    border-radius: var(--border-radius-sm);
    cursor: pointer;

    a {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0.2rem;
    }

    svg {
      cursor: pointer;
      color: var(--color-indigo-700);
      height: 50px;
      width: 50px;
    }
  }
`;
