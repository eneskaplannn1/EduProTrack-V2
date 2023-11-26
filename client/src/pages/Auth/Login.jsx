import useLogin from "../../hooks/useLogin";
import { styled } from "styled-components";

import Button from "../../UI/Button/Button";

import FormRowVertical from "../../UI/FormRowVertical";
import Input from "../../UI/Input";
import { NavLink } from "react-router-dom";

function Login() {
  const { register, errors, handleSubmit, onSubmitForm, isLoading } =
    useLogin();

  return (
    <StyledAuthContainer>
      <StyledLoginImageContainer>
        <img src="/initial.jpg" />
      </StyledLoginImageContainer>
      <StyledLoginForm onSubmit={handleSubmit(onSubmitForm)}>
        <StyledFormHead>
          <img src="/logo-dark.png" />
          <h3>Login</h3>
        </StyledFormHead>
        <FormRowVertical label="Email" error={errors?.email?.message}>
          <Input
            disabled={isLoading}
            type="email"
            id="email"
            {...register("email", { required: "Enter your email" })}
          />
        </FormRowVertical>
        <FormRowVertical label="Password" error={errors?.password?.message}>
          <Input
            disabled={isLoading}
            type="password"
            id="password"
            {...register("password", { required: "Enter your password" })}
          />
        </FormRowVertical>
        <Button disabled={isLoading} size="medium" variation="blue">
          {isLoading ? "Logging In..." : "Login"}
        </Button>
        <Copyright>
          © Copyright by Enes Kaplan.
          <NavLink to={"https://github.com/eneskaplannn1/EduProTrack-V2"}>
            Click here to see source code
          </NavLink>
        </Copyright>
      </StyledLoginForm>
    </StyledAuthContainer>
  );
}

export default Login;

const StyledAuthContainer = styled.div`
  display: grid;
  grid-template-columns: 6fr 5fr;
  max-height: 100vh;

  color: var(--color-grey-900);
  background-color: var(--color-grey-50);

  input {
    color: black !important;
  }
`;

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 3rem 4rem;
  gap: 1.4rem;

  font-size: 21px;
`;
const StyledFormHead = styled.div`
  width: auto;
  text-align: center;

  img {
    height: 8rem;
    border-radius: 50%;
  }
`;

const StyledLoginImageContainer = styled.div`
  display: flex;
  img {
    height: 100vh;
    width: 100%;
  }
`;

const Copyright = styled.div`
  margin: auto auto 0;
  color: var(--color-grey-900);
  font-size: 20px;

  a {
    transition: 0.4s ease;

    &:hover {
      color: #ea580c;
    }
  }
`;
