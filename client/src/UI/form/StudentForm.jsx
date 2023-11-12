import Button from "../Button/Button";
import ButtonContainer from "../Button/ButtonContainer";
import StyledFormLayout from "./FormLayout";

import { useAuth } from "../../context/AuthProvider";
import useEditCreateStudent from "../../hooks/useEditCreateStudent";
import Input from "../Input";
import FormRow from "../FormRow";

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
      <FormRow label="Name" error={errors?.name?.message}>
        <Input
          disabled={isManipulating}
          type="text"
          id="name"
          {...register("name", { required: "Enter your name" })}
        />
      </FormRow>
      <FormRow label="Email" error={errors?.email?.message}>
        <Input
          disabled={isManipulating}
          type="email"
          id="email"
          {...register("email", { required: "Enter your email" })}
        />
      </FormRow>
      <FormRow label="Username" error={errors?.username?.message}>
        <Input
          disabled={isManipulating}
          type="text"
          id="username"
          {...register("username", { required: "Enter your username" })}
        />
      </FormRow>
      {!isEditing && (
        <FormRow label="Password" error={errors?.password?.message}>
          <Input
            disabled={isManipulating}
            type="password"
            id="password"
            {...register("password", { required: "Enter your password" })}
          />
        </FormRow>
      )}
      <FormRow label="Age" error={errors?.age?.message}>
        <Input
          disabled={isManipulating}
          type="number"
          id="age"
          {...register("age", { required: "Enter your age" })}
        />
      </FormRow>
      <FormRow label="phoneNum" error={errors?.phoneNum?.message}>
        <Input
          disabled={isManipulating}
          type="tel"
          id="phoneNum"
          {...register("phoneNum", { required: "Enter your phone number" })}
        />
      </FormRow>
      <FormRow label="Gender" error={errors?.gender?.message}>
        <select
          id="gender"
          name="students"
          {...register("gender", { required: "Select your gender" })}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </FormRow>
      <ButtonContainer>
        <Button
          onClick={onCloseModal}
          disabled={isManipulating}
          variation="red"
          size="large"
        >
          Cancel
        </Button>
        <Button disabled={isManipulating} variation="blue" size="large">
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
