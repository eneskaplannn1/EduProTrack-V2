import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);

    svg {
      color: #51e15f;
    }
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }

  &:focus {
    border: 1px solid #51e15f;
    svg {
      color: #51e15f;
    }
  }
`;

export default ButtonIcon;
