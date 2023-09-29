import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import APIClient from "../services/apiClient";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const apiClient = new APIClient<Post>("/posts");

const usePosts = (query: PostQuery) => {
  const fetchPosts = ({ pageParam = 1 }) =>
    apiClient.getAll({
      params: {
        _start: (pageParam - 1) * query.pageSize,
        _limit: query.pageSize,
      },
    });

  return useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: fetchPosts,
    staleTime: 1 * 60 * 1000, //1m
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export default usePosts;
