import { ImArrowLeft2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const StyledBack = styled.span`
  padding: 0 0 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: 2rem;

  transition: color 0.4s ease;

  &:hover {
    color: #51e15f;
  }
`;

function BackButton() {
  const navigate = useNavigate();
  return (
    <StyledBack onClick={() => navigate(-1)}>
      <ImArrowLeft2 />
      <span>Go back</span>
    </StyledBack>
  );
}

export default BackButton;
