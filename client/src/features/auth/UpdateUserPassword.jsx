import { styled } from "styled-components";

import Button from "../../UI/Button/Button";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import FormElement from "../../UI/FormRowVertical";
import StyledFormLayout from "../../UI/form/FormLayout";

import useUpdateUserPassword from "../../hooks/useUpdateUserPassword";
import FormRow from "../../UI/FormRow";
import Input from "../../UI/Input";

const StyledDiv = styled.div`
  margin: 1rem 0;

  h4 {
    margin-bottom: 1rem;
  }
`;
function UpdatePasswordForm() {
  const {
    handleSubmitForm,
    isUpdating,
    getValues,
    errors,
    register,
    handleSubmit,
  } = useUpdateUserPassword();

  return (
    <StyledDiv>
      <h4>Update Password</h4>
      <StyledFormLayout onSubmit={handleSubmit(handleSubmitForm)}>
        <FormRow label="Password" error={errors?.password?.message}>
          <Input
            type="password"
            id="password"
            {...register("password", { required: "Enter your password" })}
          />
        </FormRow>
        <FormRow label="newPassword" error={errors?.newPassword?.message}>
          <Input
            type="password"
            id="newPassword"
            {...register("newPassword", {
              required: "Enter your new password",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              validate: (value) =>
                value === getValues().confirmPass || "Passwords do not match",
            })}
          />
        </FormRow>
        <FormRow label="confirmPass" error={errors?.confirmPass?.message}>
          <Input
            type="password"
            id="confirmPass"
            {...register("confirmPass", {
              required: "Confirm your password",
              validate: (value) =>
                value === getValues().newPassword || "Passwords do not match",
            })}
          />
        </FormRow>
        <ButtonContainer>
          <Button size="large" variation="blue">
            {isUpdating ? "Updating password" : "Update Password"}
          </Button>
        </ButtonContainer>
      </StyledFormLayout>
    </StyledDiv>
  );
}

export default UpdatePasswordForm;
