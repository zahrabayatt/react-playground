import { useInfiniteQuery } from "@tanstack/react-query";
import postService, { Post } from "../services/postService";
interface PostQuery {
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  const fetchPosts = ({ pageParam = 1 }) =>
    postService.getAll({
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
