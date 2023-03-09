import styled from 'styled-components';

export const Label = styled.label`
  padding: 2px;
  font-size: 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 8px 16px;
  font-size: 14px;
  color: #010101;
  background-color: transparent;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  outline: none;
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 200px;
  }
`;

export const Field = styled.div`
  position: relative;
  border-radius: 15px;
`;
