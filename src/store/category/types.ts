export type CategoryType = {
  id: number;
  name: string;
  description: string;
  Products: Record<string, any>;
};

export type CategoryStateType = {
  currentCategories: CategoryType[];
};

export type CategoryPayload = {
  id?: number;
  name: string;
  description: string;
};
