import { Input, Select } from "antd";

import {
  CardContainer,
  CharInfoContainer,
  CharImage,
  CharacterListContainer,
  Container,
  FilterContainer,
} from "./styles";

import { StatusSpan } from "../../styles/components/StatusSpan";

export const CharacterList = () => {
  return (
    <>
      <Container>
        <FilterContainer>
          <Input
            placeholder="Name"
            allowClear
            size="large"
            style={{
              width: "20rem",
              outline: "none",
              border: "none",
            }}
          />
          <Select
            placeholder="Status"
            size="large"
            style={{
              textAlign: "start",
              width: "10rem",
              outline: "none",
              border: "none",
            }}
            options={[
              {
                label: "Alive",
                value: "alive",
              },
              {
                label: "Dead",
                value: "dead",
              },
              {
                label: "Unknown",
                value: "unknown",
              },
            ]}
          />
        </FilterContainer>

        <CharacterListContainer>
          <CharacterCard />
          <CharacterCard />
        </CharacterListContainer>
      </Container>
    </>
  );
};

const CharacterCard = () => {
  return (
    <CardContainer>
      <CharImage
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Rick Sanchez"
      />
      <CharInfoContainer>
        <div>
          <h2>Rick Sanchez</h2>
          <p>
            <StatusSpan alive={true} />
            Human - Alive
          </p>
        </div>
      </CharInfoContainer>
    </CardContainer>
  );
};

CharacterList.displayName = "CharacterList";
