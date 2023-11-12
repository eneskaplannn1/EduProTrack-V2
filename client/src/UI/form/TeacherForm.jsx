import StyledFormLayout from "./FormLayout";
import FormRow from "../FormRow";
import ButtonContainer from "../Button/ButtonContainer";
import Button from "../Button/Button";
import useEditCreateTeacher from "../../hooks/useEditCreateTeacher";
import Input from "../Input";

function TeacherForm({ onCloseModal, isEditing, TeacherToEdit = {} }) {
  const { _id: teacherId, ...editValues } = TeacherToEdit;

  const { handleSubmitForm, register, handleSubmit, errors, isManupulating } =
    useEditCreateTeacher({ teacherId, editValues, onCloseModal, isEditing });

  return (
    <StyledFormLayout onSubmit={handleSubmit(handleSubmitForm)}>
      <FormRow label="Name" error={errors?.name?.message}>
        <Input
          disabled={isManupulating}
          type="text"
          id="name"
          {...register("name", { required: "Enter your name" })}
        />
      </FormRow>
      <FormRow label="Username" error={errors?.username?.message}>
        <Input
          disabled={isManupulating}
          type="text"
          id="username"
          {...register("username", { required: "Enter teacher's name" })}
        />
      </FormRow>
      <FormRow label="Email" error={errors?.email?.message}>
        <Input
          disabled={isManupulating}
          type="email"
          id="email"
          {...register("email", { required: "Enter teacher's email" })}
        />
      </FormRow>
      {!isEditing && (
        <FormRow label="Password" error={errors?.password?.message}>
          <Input
            disabled={isManupulating}
            type="password"
            id="password"
            {...register("password", { required: "Enter teacher's password" })}
          />
        </FormRow>
      )}
      <FormRow label="Address" error={errors?.address?.message}>
        <Input
          disabled={isManupulating}
          type="address"
          id="address"
          {...register("address", { required: "Enter teacher's address" })}
        />
      </FormRow>
      <FormRow label="phoneNum" error={errors?.phoneNum?.message}>
        <Input
          disabled={isManupulating}
          type="text"
          id="phoneNum"
          {...register("phoneNum", {
            required: "Enter teacher's phone number",
          })}
        />
      </FormRow>
      <FormRow label="Age" error={errors?.age?.message}>
        <Input
          disabled={isManupulating}
          type="number"
          id="age"
          {...register("age", { required: "Enter teacher's age" })}
        />
      </FormRow>
      <FormRow label="Gender" error={errors?.gender?.message}>
        <select
          id="gender"
          {...register("gender", { required: "Select teacher's gender" })}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </FormRow>
      <ButtonContainer>
        <Button variation="red" size="medium" onClick={onCloseModal}>
          Cancel
        </Button>
        <Button disabled={isManupulating} variation="blue" size="medium">
          {isEditing ? "Update Teacher data" : "Add Teacher"}
        </Button>
      </ButtonContainer>
    </StyledFormLayout>
  );
}

export default TeacherForm;
