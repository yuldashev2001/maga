import { useQuery } from "@tanstack/react-query";
import { get } from "@/lib/api";

export interface Product {
  id: number;
  name: string;
  category: number;
  category_name: string;
  price: string;
  stock: number;
  description: string;
}

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => get<Product[]>("products/"),
  });
};
