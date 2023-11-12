import { styled } from "styled-components";

import Button from "../../UI/Button/Button";

import useUpdateUserData from "../../hooks/useUpdateUserData";
import FormRow from "../../UI/FormRow";
import Input from "../../UI/Input";

function UpdateUserDataForm({ user, updateUser }) {
  const { handleSubmitForm, isUpdating, handleSubmit, errors, register } =
    useUpdateUserData({ user, updateUser });

  return (
    <Container>
      <h4>Update User Data</h4>
      <StyledAccountContainer onSubmit={handleSubmit(handleSubmitForm)}>
        <FormRow label="Email" error={errors?.email?.message}>
          <Input
            disabled={isUpdating}
            type="email"
            id="email"
            placeholder="example@gmail.com"
            {...register("email", { required: "Enter your email" })}
          />
        </FormRow>
        <FormRow label="Username" error={errors?.username?.message}>
          <Input
            disabled={isUpdating}
            type="text"
            id="username"
            placeholder="John Doe"
            {...register("username", { required: "Enter your username" })}
          />
        </FormRow>
        <FormRow label="Name" error={errors?.name?.message}>
          <Input
            disabled={isUpdating}
            type="text"
            id="name"
            placeholder="John Doe"
            {...register("name", { required: "Enter your name" })}
          />
        </FormRow>
        {user.role !== "Admin" && (
          <>
            <FormRow label="PhoneNum" error={errors?.phoneNum?.message}>
              <Input
                disabled={isUpdating}
                type="text"
                id="phoneNum"
                placeholder="John Doe"
                {...register("phoneNum", {
                  required: "Enter your phone number",
                })}
              />
            </FormRow>
            <FormRow label="Age" error={errors?.age?.message}>
              <Input
                disabled={isUpdating}
                type="number"
                id="age"
                placeholder="John Doe"
                {...register("age", { required: "Enter your age" })}
              />
            </FormRow>
          </>
        )}
        {/* <FormElement>
          <label htmlFor="avatar">Avatar Image</label>
          <input
          disabled={isUpdating} type="file" id="avatar" accept="image/*"  />
        </FormElement> */}
        <Button size="large" variation="blue" disabled={isUpdating}>
          {isUpdating ? "Updating account" : "Update account"}
        </Button>
      </StyledAccountContainer>
    </Container>
  );
}

export default UpdateUserDataForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    margin-left: auto;
  }
`;

const StyledAccountContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  padding: 1.2rem 2.4rem;
  background-color: var(--color-grey-50);
  border-radius: var(--border-radius-md);
`;
