export interface MockType {
  type: string;
  version: number;
  response: Response;
}

export interface Response {
  [key: string]: {
    id: string;
    value_area: number;
    value_bar: number;
  };
}

export interface DataProps {
  name: string;
  id: string;
  value_area: number;
  value_bar: number;
}
