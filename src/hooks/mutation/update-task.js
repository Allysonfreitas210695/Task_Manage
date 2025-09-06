import { useMutation, useQueryClient } from "@tanstack/react-query"

import { updateTask } from "../../api/task-api"
import { taskMutationKeys } from "../../keys/mutations"
import { taskQueryKeys } from "../../keys/queries"

export const useUpdateTask = (taskId) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: taskMutationKeys.update(taskId),
    mutationFn: async (taskUpdated) => await updateTask(taskUpdated),
    onSuccess: (data, variables) => {
      queryClient.setQueryData(taskQueryKeys.getAll(), (old = []) =>
        old.map((taskOld) =>
          taskOld.id === variables.id ? { ...taskOld, ...variables } : taskOld
        )
      )
    },
  })
}
