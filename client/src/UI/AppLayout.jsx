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
        <Container>
          <Outlet />
        </Container>
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

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.div`
  background-color: var(--color-grey-50);
  padding: 2rem;
  overflow: auto;
`;
