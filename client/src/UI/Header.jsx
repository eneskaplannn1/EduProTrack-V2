import { useAuth } from "../context/AuthProvider";
import { styled } from "styled-components";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const { logout, user } = useAuth();

  return (
    <StyledHeader>
      <h3>School Management System</h3>
      {user.role === "Admin" ? <div style={{ color: "red" }}>Admin</div> : ""}
      <HeaderMenu logout={logout} />
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 1/3;

  padding: 1rem 2rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
`;
