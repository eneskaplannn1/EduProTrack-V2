import { styled } from "styled-components";

function FormRowVertical({ children, label, error }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={label.toLowerCase()}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  &:focus-within {
    label {
      font-weight: bold;
    }
  }
`;

const Label = styled.label`
  text-align: left;
  color: var(--color-grey-100);
  font-weight: 500;
`;

const Error = styled.div`
  color: var(--color-red-700);
`;
