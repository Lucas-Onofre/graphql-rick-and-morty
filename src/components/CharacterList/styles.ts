import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 80vh;
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

  @media (max-width: 720px) {
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

  h2 {
    font-weight: 800;
    font-size: 2rem;
  }

  p {
    font-weight: 500;
    font-size: 1rem;
  }

  @media (max-width: 720px) {
    width: 100%;
    height: 70%;
  }
`;
