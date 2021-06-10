import styled from "@emotion/styled";

export const FileBackground = styled.div`
  width: 100%;
  height: 100%;
  /* background: rgba(83, 104, 120, 0.9); */
  position: fixed;
  z-index: 1000;
`;
export const FileModalWrapper = styled.div`
  width: 12rem;
  height: 13rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: rgba(119, 136, 153);
  color: #000;
  position: absolute;
  top: 10rem;
  left: 10rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* display: grid;
  grid-template-columns: 1fr;
  position: relative; */
  z-index: 10;
  border-radius: 5px;
`;
export const FileModalDecContent = styled.div`
  font-size: 1.4rem;
  cursor: pointer;
  color: whitesmoke;
  transition: 0.2s ease all;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;

  &:hover {
    background-color: rgba(153, 102, 204, 0.4);
  }
`;

export const FileModalContent = styled.a`
  font-size: 1.4rem;
  cursor: pointer;
  color: whitesmoke;
  transition: 0.2s ease all;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;

  &:hover {
    background-color: rgba(153, 102, 204, 0.4);
  }
`;

export const HR = styled.hr`
  border: none;
  border-top: 1px solid #c5c5c5;
`;
