import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./Sidebar";
import { styled } from "styled-components";

function AppLayout() {
  return (
    <StyledContainer>
      <Header />
      <SideBar />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledContainer>
  );
}

export default AppLayout;

const StyledContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-template-rows: auto 1fr;
  color: var(--color-grey-900);
`;

const StyledMain = styled.div`
  padding: 2rem;
  background-color: var(--color-grey-0);
  overflow: auto;
`;
