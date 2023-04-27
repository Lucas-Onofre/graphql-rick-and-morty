import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100%;
  text-align: center;

  background-color: #202329;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  width: 95%;

  margin: 2rem 0;

  gap: 1rem;
`;

export const CharacterListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin: 0 auto;
  width: 95%;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;

  width: 95%;
  height: 100%;

  background-color: #3c3e44;
  border-radius: 1rem;

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const CharImage = styled.img`
  width: 40%;
  height: 100%;

  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;

  @media (max-width: 720px) {
    width: 100%;
    height: 30%;

    border-top-right-radius: 1rem;
    border-bottom-left-radius: 0;
  }
`;

export const CharPrincipalInfos = styled.div`
  h2 {
    font-weight: 800;
    font-size: 1.8rem;
  }

  p {
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

export const CharOtherInfos = styled.div`
  gap: 2rem;

  span {
    font-size: 1.2rem;
    font-weight: 600;
    color: #a8a8b3;
  }

  p {
    font-size: 1.4rem;
    font-weight: 200;
  }
`;

export const CharInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  text-align: start;

  color: white;

  width: 60%;
  height: 100%;
  padding: 1rem;

  @media (max-width: 720px) {
    width: 100%;
    height: 70%;
  }
`;

export const PaginationButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 70vw;

  margin: 2rem auto;

  button {
    border: none;
    background-color: #3c3e44;
    color: white;
    width: 5rem;

    :disabled {
      color: white;
      background-color: #3c3e44;
      opacity: 0.5;
    }

    border-radius: 0.5rem;

    transition: transform 0.2s;

    &:hover {
      transform: scale(1.02);
    }
  }
`;
