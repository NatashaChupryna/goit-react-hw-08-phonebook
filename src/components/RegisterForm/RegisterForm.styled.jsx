import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-align: center;
  border-radius: 10px;
  padding: 25px;
  margin: 0 auto;
  width: 99%;
  box-shadow: rgba(253, 2, 2, 0.4) 0px 5px 15px;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 8px 16px;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  outline: none;
`;

export const Label = styled.label`
  text-align: left;
  font-weight: 600;
  padding: 2px;
  font-size: 16px;
  margin-bottom: 4px;
`;

export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
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
  color: black;
  transition: all 300ms ease;
  :hover {
    background-color: red;
    color: white;
  }
`;
