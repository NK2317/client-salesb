import { CategoryPayload } from "../category/types";

export type ProductType = {
  id?: number;
  name: string;
  description: string;
  price: number;
  providerPrice: number;
  unit: string;
  categoryID: number;
  Category?: CategoryPayload;
  qty?: number;
};

export type ProductStateType = {
  currentProducts: ProductType[];
};
