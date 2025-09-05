import { useMutation, useQueryClient } from "@tanstack/react-query"

import { removeTask } from "../../api/task-api"
import { taskQueryKeys } from "../../keys/queries"

export const useRemoveTask = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (taskId) => removeTask(taskId),
    onSuccess: (data, variables) => {
      queryClient.setQueryData(taskQueryKeys.getAll(), (old) =>
        old.filter((task) => task.id !== variables)
      )
    },
  })
}
