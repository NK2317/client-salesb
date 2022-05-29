import { UserInfoType } from "../auth/types";
import { ClientType } from "../client/types";
import { ProductType } from "../product/types";

export type OrderProductPayload = {
  product: ProductType;
  qty: number;
};

export type OrderType = {
  id: number;
  creationDate: string;
  amount: number;
  clientID: number;
  userID: number;
  status: boolean;

  ProductOnOrders?: Record<string, unknown>[];
  Client?: ClientType;
  UserCreator?: UserInfoType;
};

export type OrderStateType = {
  currentOrders: OrderType[];
};

export type OrderPayloadType = {
  clientForLoanId: number;
  userID: number;
  selectedProducts: OrderProductPayload[];
};

export type ProductOnOrderType = {
  id: number;
  productID: number;
  orderID: number;
  qty: number;
  Product: ProductType;
  Order?: OrderType;
};
