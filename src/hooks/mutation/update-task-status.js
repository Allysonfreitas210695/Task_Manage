import { useMutation, useQueryClient } from "@tanstack/react-query"

import { updateTaskStatus } from "../../api/task-api"
import { taskMutationKeys } from "../../keys/mutations"
import { taskQueryKeys } from "../../keys/queries"

export const useUpdateTaskStatus = (taskId) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: taskMutationKeys.update(taskId),
    mutationFn: async ({ newStatus }) =>
      await updateTaskStatus(taskId, newStatus),
    onSuccess: (_, variables) => {
      queryClient.setQueryData(taskQueryKeys.getAll(), (old = []) =>
        old.map((task) =>
          task.id === taskId ? { ...task, status: variables.newStatus } : task
        )
      )
    },
  })
}
