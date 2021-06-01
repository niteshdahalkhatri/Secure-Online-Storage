import styled from "@emotion/styled";

export const HomeContainer = styled.section`
  height: 70%;
`;

export const ScrollContainer = styled.div`
  overflow-y: scroll;
  height: 82%;
`;

export const HR = styled.hr`
  border-top: 2px solid grey;
  margin: 1rem 0;
`;

export const HomeMain = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem 2rem 2rem;
  span {
    align-self: center;
    margin: 0 0 0 1rem;
  }
`;

export const FolderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 2rem;
`;

export const Folders = styled.div`
  max-width: 25rem;
  padding: 1rem;
`;
