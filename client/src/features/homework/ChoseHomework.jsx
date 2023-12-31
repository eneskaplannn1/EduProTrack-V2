import { styled } from "styled-components";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal";
import HomeworkForm from "../../UI/form/HomeworkForm";

const StyledChoseHomework = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

function ChoseHomework({ teacherId, classId, students }) {
  return (
    <StyledChoseHomework>
      <Modal>
        <Modal.Open opens="give-homework-student">
          <Button>Give homework to spesific students</Button>
        </Modal.Open>
        <Modal.Window name="give-homework-student">
          <HomeworkForm
            teacherId={teacherId}
            classId={classId}
            students={students}
            chooseStudent={true}
          />
        </Modal.Window>
      </Modal>
      <Modal>
        <Modal.Open opens="give-homework-class">
          <Button>Give homework to Class</Button>
        </Modal.Open>
        <Modal.Window name="give-homework-class">
          <HomeworkForm
            teacherId={teacherId}
            classId={classId}
            students={students}
          />
        </Modal.Window>
      </Modal>
    </StyledChoseHomework>
  );
}

export default ChoseHomework;
