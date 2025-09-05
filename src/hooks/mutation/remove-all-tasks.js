import { useMutation, useQueryClient } from "@tanstack/react-query"

import { removeAllTasks } from "../../api/task-api"
import { taskQueryKeys } from "../../keys/queries"

export const useRemoveAllTasks = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (tasks) => removeAllTasks(tasks),
    onSuccess: () => {
      queryClient.setQueryData(taskQueryKeys.getAll(), [])
    },
  })
}
