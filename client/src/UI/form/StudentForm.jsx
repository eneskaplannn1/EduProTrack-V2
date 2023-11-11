import FormElement from "../FormRowVertical";
import Button from "../Button/Button";
import ButtonContainer from "../Button/ButtonContainer";
import StyledFormLayout from "./FormLayout";

import { useAuth } from "../../context/AuthProvider";
import useEditCreateStudent from "../../hooks/useEditCreateStudent";

function StudentForm({
  onCloseModal,
  isEditing,
  StudentToEdit = {},
  teacherId = null,
  classId = null,
}) {
  const { _id: studentId, ...editValues } = StudentToEdit;
  const { user } = useAuth();

  const { isManipulating, handleSubmit, register, errors, handleSubmitForm } =
    useEditCreateStudent({
      isEditing,
      user,
      studentId,
      onCloseModal,
      editValues,
      teacherId,
      classId,
    });

  return (
    <StyledFormLayout onSubmit={handleSubmit(handleSubmitForm)}>
      <FormElement>
        <label htmlFor="name">Name</label>
        <input
          disabled={isManipulating}
          type="text"
          id="name"
          {...register("name", { required: "Enter your name" })}
        />
        {errors?.name?.message && <div>{errors.name.message}</div>}
      </FormElement>
      <FormElement>
        <label htmlFor="email">Email</label>
        <input
          disabled={isManipulating}
          type="email"
          id="email"
          {...register("email", { required: "Enter your email" })}
        />
        {errors?.email?.message && <div>{errors.email.message}</div>}
      </FormElement>
      <FormElement>
        <label htmlFor="username">Username</label>
        <input
          disabled={isManipulating}
          type="text"
          id="username"
          {...register("username", { required: "Enter your username" })}
        />
        {errors?.username?.message && <div>{errors.username.message}</div>}
      </FormElement>
      {!isEditing && (
        <FormElement>
          <label htmlFor="password">Password</label>
          <input
            disabled={isManipulating}
            type="password"
            id="password"
            {...register("password", { required: "Enter your password" })}
          />
          {errors?.password?.message && <div>{errors.password.message}</div>}
        </FormElement>
      )}
      <FormElement>
        <label htmlFor="age">Age</label>
        <input
          disabled={isManipulating}
          type="number"
          id="age"
          {...register("age", { required: "Enter your age" })}
        />
        {errors?.age?.message && <div>{errors.age.message}</div>}
      </FormElement>
      <FormElement>
        <label htmlFor="phoneNum">Phone Number</label>
        <input
          disabled={isManipulating}
          type="tel"
          id="phoneNum"
          {...register("phoneNum", { required: "Enter your phone number" })}
        />
        {errors?.phoneNum?.message && <div>{errors.phoneNum.message}</div>}
      </FormElement>
      <FormElement>
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="students"
          {...register("gender", { required: "Select your gender" })}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </FormElement>
      <ButtonContainer>
        <Button
          onClick={onCloseModal}
          disabled={isManipulating}
          variation="cancel"
          type="small"
        >
          Cancel
        </Button>
        <Button disabled={isManipulating} variation="update" type="small">
          {isEditing && isManipulating
            ? "Updating Student"
            : isEditing
            ? "Update Student"
            : isManipulating
            ? "Adding Student"
            : "Add Student"}
        </Button>
      </ButtonContainer>
    </StyledFormLayout>
  );
}

export default StudentForm;
