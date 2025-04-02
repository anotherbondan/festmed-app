import { axiosInstance } from "@/lib/axios";
// import { useQuery } from "@tanstack/react-query";

export const findAccountById = async (userId) => {
  const { data } = await axiosInstance.get(`/accounts/${userId}`);
  return data;
};
