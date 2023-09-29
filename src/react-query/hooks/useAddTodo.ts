import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import APIClient from "../services/apiClient";
import { Todo } from "./useTodos";

interface AddTodoContext {
  previousTodos: Todo[];
}

const apiClient = new APIClient<Todo>("/todos");

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: apiClient.post,
    onMutate: (newTodo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      queryClient.setQueriesData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      onAdd();

      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueriesData<Todo[]>(
        CACHE_KEY_TODOS,
        (todos) => context?.previousTodos
      );
    },
  });
};

export default useAddTodo;
