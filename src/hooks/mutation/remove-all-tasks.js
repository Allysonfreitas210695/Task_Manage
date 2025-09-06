import { useMutation, useQueryClient } from "@tanstack/react-query"

import { removeAllTasks } from "../../api/task-api"
import { taskMutationKeys } from "../../keys/mutations"
import { taskQueryKeys } from "../../keys/queries"

export const useRemoveAllTasks = (tasks) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: taskMutationKeys.deleteAll(tasks),
    mutationFn: async () => await removeAllTasks(tasks),
    onSuccess: () => {
      queryClient.setQueryData(taskQueryKeys.getAll(), [])
    },
  })
}
