export interface ICharacter {
  id: string;
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
  episode: Array<{
    id: string;
    name: string;
  }>;
}
