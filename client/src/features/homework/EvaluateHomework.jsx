import { styled } from "styled-components";
import Button from "../../UI/Button/Button";
import ButtonContainer from "../../UI/Button/ButtonContainer";

function EvaluateHomework({ handleHomeworkStatus, onCloseModal, isSending }) {
  return (
    <StyledEvaluateHomework>
      <ButtonContainer variation="column">
        <Button
          onClick={() => {
            handleHomeworkStatus("Successful");
            onCloseModal();
          }}
          size="large"
          variation="green"
        >
          {isSending ? "Setting Homework Status" : "Success"}
        </Button>
        <Button
          onClick={() => {
            handleHomeworkStatus("Failed");
            onCloseModal();
          }}
          size="large"
          variation="red"
        >
          {isSending ? "Setting Homework Status" : "Fail"}
        </Button>
      </ButtonContainer>
    </StyledEvaluateHomework>
  );
}

export default EvaluateHomework;

const StyledEvaluateHomework = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
