import { styled } from "styled-components";

function FormRow({ children, label, error }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={label.toLowerCase()}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;

const StyledFormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  font-size: 20px;

  input {
    background-color: var(--color-grey-0);
  }
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  select {
    color: var(--color-grey-900);
    background-color: var(--color-grey-0);

    border: 1px solid var(--color-grey-600);
    border-radius: var(--border-radius-sm);

    padding: 0.6rem 1rem;
  }
`;

const Label = styled.label`
  text-align: left;
  color: var(--color-grey-900);
  font-weight: 500;
`;

const Error = styled.div`
  color: var(--color-red-700);
  padding-left: 3rem;
`;
