/* eslint linebreak-style: ["error", "unix"] */
/* eslint no-param-reassign: "error" */
/* eslint-disable no-shadow */
export enum Sort {
  asc = "ASC",
  des = "DES",
}
export interface Search {
  where?: { id?: number; title?: string; author?: string; description?: string; genre?: string; year?: number }[];
  order?: { id?: number; title?: string; author?: string; description?: string; genre?: string; year?: number };
  skip?: number;
  take?: number;
}
