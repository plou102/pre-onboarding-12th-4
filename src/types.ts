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
  // '2023-02-01 14:32:00': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:32:05': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:32:10': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:32:15': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:32:20': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:32:25': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:32:30': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:32:35': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:32:40': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:32:45': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:32:50': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:32:55': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:33:00': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:33:05': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:33:10': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:33:15': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:33:20': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:33:25': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:33:30': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:33:35': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:33:40': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:33:45': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:33:50': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:33:55': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:34:00': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:34:05': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:34:10': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:34:15': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:34:20': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:34:25': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:34:30': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:34:35': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:34:40': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:34:45': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:34:50': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:34:55': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:35:00': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:35:05': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:35:10': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:35:15': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:35:20': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:35:25': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:35:30': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:35:35': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:35:40': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:35:45': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:35:50': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:35:55': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:36:00': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:36:05': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:36:10': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:36:15': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:36:20': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:36:25': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:36:30': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:36:35': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:36:40': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:36:45': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:36:50': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:36:55': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:37:00': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:37:05': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:37:10': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:37:15': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:37:20': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:37:25': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:37:30': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:37:35': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:37:40': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:37:45': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:37:50': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:37:55': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:38:00': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:38:05': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:38:10': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:38:15': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:38:20': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:38:25': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:38:30': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:38:35': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:38:40': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:38:45': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:38:50': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:38:55': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:39:00': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:39:05': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:39:10': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:39:15': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:39:20': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:39:25': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:39:30': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:39:35': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:39:40': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:39:45': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:39:50': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:39:55': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:40:00': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:40:05': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:40:10': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
  // '2023-02-01 14:40:15': {
  //   id: string;
  //   value_area: number;
  //   value_bar: number;
  // };
}
