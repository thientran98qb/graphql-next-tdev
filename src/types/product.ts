import { Category } from "./category";

export interface Product {
  id: string,
  name: string,
  description: string,
  price: number,
  slug: string,
  categories: Category[]
}
