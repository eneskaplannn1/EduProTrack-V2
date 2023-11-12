import { NavLink, useParams } from "react-router-dom";

import BackButton from "../../UI/Button/BackButton";
import StyledListHead from "../../UI/List/ListHead";
import StyledListElement from "../../UI/List/ListElement";

import { ClipLoader } from "react-spinners";
import { styled } from "styled-components";

import Modal from "../../UI/Modal";
import Button from "../../UI/Button/Button";
import StudentForm from "../../UI/form/StudentForm";
import ChoseHomework from "../homework/ChoseHomework";
import useClass from "../../hooks/useClass";
import StudentTable from "../Student/StudentTable";
import { useAuth } from "../../context/AuthProvider";
import HomeworkForm from "../../UI/form/HomeworkForm";
import ButtonContainer from "../../UI/Button/ButtonContainer";

const StyledHeader = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  margin: 1.2rem 0;

  color: red;
  font-weight: bold;

  font-size: 1.2rem;
`;

function ClassDetail() {
  const { classId } = useParams();
  const { user } = useAuth();

  const { data, isLoading } = useClass({ classId });

  if (isLoading) return "hello";

  const { students, teacher, _id: classID } = data.data.doc;
  return (
    <>
      <BackButton />

      <>
        <h2>Teacher</h2>
        <StyledListHead variation="teacher">
          <li>Teacher Avatar</li>
          <li>Teacher Name</li>
          <ButtonContainer>
            <Modal>
              <Modal.Open opens="give-homework-student">
                <Button variation="blue" size="small">
                  Give homework to spesific students
                </Button>
              </Modal.Open>
              <Modal.Window name="give-homework-student">
                <HomeworkForm
                  teacherId={teacher._id}
                  classId={classId}
                  students={students}
                  chooseStudent={true}
                />
              </Modal.Window>
            </Modal>
            <Modal>
              <Modal.Open opens="give-homework-class">
                <Button variation="blue" size="small">
                  Give homework to Class
                </Button>
              </Modal.Open>
              <Modal.Window name="give-homework-class">
                <HomeworkForm
                  teacherId={teacher._id}
                  classId={classId}
                  students={students}
                />
              </Modal.Window>
            </Modal>
          </ButtonContainer>
        </StyledListHead>
        <StyledListElement variation="teacher">
          <img src={`/users/${teacher.photo}`} />
          <li>{teacher.name}</li>
          {user.role === "Admin" && (
            <NavLink to={`/teachers/${teacher._id}`}>See details</NavLink>
          )}
        </StyledListElement>
      </>

      <>
        <h2>Students</h2>
        <StyledListHead variation="class">
          <div>Students Avatar</div>
          <div>Student Name</div>

          <Modal>
            <Modal.Open>
              <Button size="medium" variation="blue">
                Add student to class
              </Button>
            </Modal.Open>
            <Modal.Window>
              <StudentForm teacherId={teacher._id} classId={classID} />
            </Modal.Window>
          </Modal>
        </StyledListHead>
        <StudentTable students={students} />
      </>
    </>
  );
}

export default ClassDetail;
