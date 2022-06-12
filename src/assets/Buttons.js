import styled from "styled-components";

export const GrayButton = styled.div`
  border: 1px solid #d8d8d8;
  background-color: #efefef;
  border-radius: 13px;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  gap: 5px;
  transition: all 0.5s ease-out;
  &:hover {
    background-color: #e3e1e1;
  }
`;

export const BlueButton = styled.button`
  background-color: #2400ff;
  height: 60px;
  width: 100%;
  color: white;
  border: none;
  border-radius: 13px;
  margin-top: 12px;
  cursor: pointer;
  transition: 0.5s ease-out;
  &:hover {
    background-color: #12017a;
  }
`;
