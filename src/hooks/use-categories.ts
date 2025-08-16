import { useQuery } from "@tanstack/react-query";
import { get } from "@/lib/api";

export interface Category {
  id: number;
  name: string;
  description: string;
}

export const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: () => get<Category[]>("categories/"),
  });
};
