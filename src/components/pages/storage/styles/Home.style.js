import styled from "@emotion/styled";

export const HomeContainer = styled.section`
  overflow-y: scroll;
  height: 85%;
`;

export const HR = styled.hr`
  border-top: 1px solid #c5c5c5;
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

export const FileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 2rem 0 2rem;
`;

export const Folders = styled.div`
  max-width: 25rem;
  padding: 1rem;
`;

export const Files = styled.div`
  max-width: 25rem;
  padding: 1rem;
`;
