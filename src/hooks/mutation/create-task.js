import { useMutation, useQueryClient } from "@tanstack/react-query"

import { createTask } from "../../api/task-api"
import { taskQueryKeys } from "../../keys/queries"

export const useCreateTask = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (newTask) => createTask(newTask),
    onSuccess: (data) => {
      queryClient.setQueryData(taskQueryKeys.getAll(), (old = []) => [
        ...old,
        data,
      ])
    },
  })
}
