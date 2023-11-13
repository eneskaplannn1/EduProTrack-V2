import { BsEyeSlash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useAuth } from "../../context/AuthProvider";

const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background-color: #021329;
  color: white;
  font-size: 2rem;

  button {
    color: red;
    font-size: 2rem;
  }

  svg {
    width: 100px;
    height: 100px;
    color: red;
  }
`;

const UnAuthorized = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <StyledSection>
      <BsEyeSlash />
      <h1>UnAuthorized</h1>
      <p>You do not have access to the this page.</p>
      <button
        onClick={() => {
          user ? navigate("/") : navigate("/login");
        }}
      >
        Click here to go back
      </button>
    </StyledSection>
  );
};

export default UnAuthorized;
