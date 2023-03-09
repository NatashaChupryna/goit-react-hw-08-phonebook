import styled from 'styled-components';

export const ContactsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  margin: 0;
`;
export const Button = styled.button`
  width: 150px;
  padding: 10px 15px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid black;
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
  transition: all 300ms ease;
  :hover {
    background-color: red;
    color: white;
  }
`;
export const Label = styled.label`
  font-size: 16px;
  display: flex;
  align-items: center;
`;

export const NameInput = styled.input`
  margin-left: 25px;
  width: 250px;
  height: 28px;
  padding: 8px 16px;
  font-size: 14px;
  background-color: transparent;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  border: 1px solid rgb(200, 200, 200);
  :focus-visible {
    outline: transparent;
  }
`;
export const NumberInput = styled.input`
  margin-left: 10px;
  width: 250px;
  height: 28px;
  padding: 8px 16px;
  font-size: 14px;
  background-color: transparent;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  border: 1px solid rgb(200, 200, 200);
  :focus-visible {
    outline: transparent;
  }
`;
