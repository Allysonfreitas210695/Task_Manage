import { useMutation, useQueryClient } from "@tanstack/react-query"

import { createTask } from "../../api/task-api"
import { taskMutationKeys } from "../../keys/mutations"
import { taskQueryKeys } from "../../keys/queries"

export const useCreateTask = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: taskMutationKeys.create(),
    mutationFn: (newTask) => createTask(newTask),
    onSuccess: (data) => {
      queryClient.setQueryData(taskQueryKeys.getAll(), (old = []) => [
        ...old,
        data,
      ])
    },
  })
}
