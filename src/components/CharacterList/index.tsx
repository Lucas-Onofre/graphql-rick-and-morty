import React, { useEffect } from "react";

import { Input, Select } from "antd";

import {
  CardContainer,
  CharInfoContainer,
  CharImage,
  CharacterListContainer,
  Container,
  FilterContainer,
  CharPrincipalInfos,
  CharOtherInfos,
} from "./styles";

import { StatusSpan } from "../../styles/components/StatusSpan";
import { useFetchCharacters } from "../../graphql/queries/useFetchCharacters";

export const CharacterList = () => {
  const { loading, characters, currentPage, nextPage, getCharacters } =
    useFetchCharacters();

  useEffect(() => {
    getCharacters({
      variables: {
        page: 1,
        name: "",
        status: "",
      },
    });
  }, [getCharacters]);

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
          {characters?.map((character) => (
            <CharacterCard
              key={character.id}
              name={character.name}
              image={character.image}
              status={character.status}
              origin={character.origin}
              location={character.location}
              species={character.species}
            />
          ))}
        </CharacterListContainer>
      </Container>
    </>
  );
};

type CharacterCardProps = {
  name: string;
  image: string;
  status: string;
  species: string;
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
};

const CharacterCard = ({
  name,
  image,
  status,
  species,
  location,
  origin,
}: CharacterCardProps) => {
  return (
    <CardContainer>
      <CharImage src={image} alt={name} />
      <CharInfoContainer>
        <CharPrincipalInfos>
          <h2>{name}</h2>
          <p>
            <StatusSpan status={status} />
            {species} - {status}
          </p>
        </CharPrincipalInfos>

        <CharOtherInfos>
          <span>Last known location:</span>
          <p>{location.name}</p>
        </CharOtherInfos>

        <CharOtherInfos>
          <span>First seen in:</span>
          <p>{origin.name}</p>
        </CharOtherInfos>
      </CharInfoContainer>
    </CardContainer>
  );
};

CharacterList.displayName = "CharacterList";
