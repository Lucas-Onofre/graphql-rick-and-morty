import { gql, useLazyQuery } from "@apollo/client";

import { ICharacter } from "../../interfaces/ICharacter";

export interface CharactersResponse {
  characters: {
    info: {
      count: number;
      pages: number;
      next: number | null;
      prev: number | null;
    };
    results: ICharacter[];
  };
}

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!, $name: String, $status: String) {
    characters(page: $page, filter: { name: $name, status: $status }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        image
        location {
          name
        }
        origin {
          name
        }
        episode {
          name
          air_date
        }
      }
    }
  }
`;

interface IQuery {
  loading: boolean;
  characters: ICharacter[] | undefined;
  count: number;
  currentPage: number;
  nextPage: number | null;
  getCharacters: (payload: {
    variables: {
      page: number;
      name?: string;
      status?: string;
    };
  }) => void;
}

export const useFetchCharacters = (): IQuery => {
  const [getCharacters, { data, loading }] =
    useLazyQuery<CharactersResponse>(GET_CHARACTERS);

  const characters = data?.characters.results;
  const prevPage = data?.characters.info.prev;
  const currentPage = prevPage ? prevPage + 1 : 1;
  const nextPage = data?.characters.info.next || null;

  return {
    loading,
    characters,
    count: data?.characters.info.count || 0,
    currentPage,
    nextPage: nextPage,
    getCharacters,
  };
};
