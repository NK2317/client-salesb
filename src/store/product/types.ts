import { CategoryPayload } from "../category/types";

export type ProductType = {
  id?: number;
  name: string;
  description: string;
  price: number;
  unit: string;
  categoryID: number;
  Category?: CategoryPayload;
};

export type ProductStateType = {
  currentProducts: ProductType[];
};
