import { useMutation, useQueryClient } from "@tanstack/react-query"

import { updateTaskStatus } from "../../api/task-api"
import { taskQueryKeys } from "../../keys/queries"

export const useUpdateTaskStatus = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ taskId, newStatus }) => updateTaskStatus(taskId, newStatus),
    onSuccess: (_, variables) => {
      queryClient.setQueryData(taskQueryKeys.getAll(), (old = []) =>
        old.map((task) =>
          task.id === variables.taskId
            ? { ...task, status: variables.newStatus }
            : task
        )
      )
    },
  })
}
