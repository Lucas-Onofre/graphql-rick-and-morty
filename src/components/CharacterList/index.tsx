import React, { useEffect, useState } from "react";

import { Button, Input, Select } from "antd";
import { Loading } from "../Loading";

import { useFetchCharacters } from "../../graphql/queries/useFetchCharacters";

import { useDebounce } from "../../hooks/useDebounce";

import { StatusSpan } from "../../styles/components/StatusSpan";
import {
  CardContainer,
  CharInfoContainer,
  CharImage,
  CharacterListContainer,
  Container,
  FilterContainer,
  CharPrincipalInfos,
  CharOtherInfos,
  PaginationButtonsContainer,
} from "./styles";

export const CharacterList = () => {
  const [page, setPage] = useState(1);

  const [nameQuery, setNameQuery] = useState("");
  const [status, setStatus] = useState("");

  const handleSearch = useDebounce((query: string) => {
    setPage(1);
    setNameQuery(query);

    getCharacters({
      variables: {
        page,
        name: query,
        status,
      },
    });
  }, 300);

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameQuery(event.target.value);
    handleSearch(event.target.value);
  };

  const { loading, characters, prevPage, nextPage, getCharacters } =
    useFetchCharacters();

  useEffect(() => {
    getCharacters({
      variables: {
        page,
        name: nameQuery,
        status,
      },
    });
  }, [getCharacters, page, status]);

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
            value={nameQuery}
            onChange={handleChangeQuery}
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
                value: "Alive",
              },
              {
                label: "Dead",
                value: "Dead",
              },
              {
                label: "Unknown",
                value: "unknown",
              },
            ]}
            onChange={(value) => setStatus(value)}
          />
        </FilterContainer>

        {loading && <Loading />}

        {!loading && (
          <CharacterListContainer>
            {characters?.map((character) => (
              <CharacterCard
                key={character.id}
                name={character.name}
                image={character.image}
                status={character.status}
                origin={character.origin}
                location={character.location}
                episode={character.episode[0]}
                species={character.species}
              />
            ))}
          </CharacterListContainer>
        )}

        <PaginationButtonsContainer>
          <Button
            onClick={() => setPage(prevPage)}
            disabled={loading || prevPage === 0}
          >
            Previous
          </Button>
          <Button
            onClick={() => setPage(nextPage)}
            disabled={loading || nextPage === 0}
          >
            Next
          </Button>
        </PaginationButtonsContainer>
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
  episode: {
    id: string;
    name: string;
  };
};

const CharacterCard = ({
  name,
  image,
  status,
  species,
  location,
  origin,
  episode,
}: CharacterCardProps) => {
  console.log(episode);
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

          <p>{episode.name}</p>
        </CharOtherInfos>
      </CharInfoContainer>
    </CardContainer>
  );
};

CharacterList.displayName = "CharacterList";
