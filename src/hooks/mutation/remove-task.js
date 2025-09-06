import { useMutation, useQueryClient } from "@tanstack/react-query"

import { removeTask } from "../../api/task-api"
import { taskMutationKeys } from "../../keys/mutations"
import { taskQueryKeys } from "../../keys/queries"

export const useRemoveTask = (taskId) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: taskMutationKeys.delete(taskId),
    mutationFn: () => removeTask(taskId),
    onSuccess: () => {
      queryClient.setQueryData(taskQueryKeys.getAll(), (old) =>
        old.filter((task) => task.id !== taskId)
      )
    },
  })
}
