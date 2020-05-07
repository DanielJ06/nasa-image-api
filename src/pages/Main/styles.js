import styled from 'styled-components';

export const Container = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;
  }

  @media (max-width: 1080px) {
     ul {
        grid-template-columns: 1fr;
    }
  }
`;

export const FormContainer = styled.div`
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 30px;

  input {
    flex: 1;
    border: 1px solid #c4c4c4;
    padding: 10px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #35495e;
  border: 0;
  padding: 0 15px;
  margin-left: 5px;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
