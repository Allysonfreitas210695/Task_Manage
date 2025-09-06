import { useQuery } from "@tanstack/react-query"

import { getTask } from "../../api/task-api"
import { taskQueryKeys } from "../../keys/queries"

export const useGetTask = ({ taskId, onSuccess }) => {
  return useQuery({
    queryKey: taskQueryKeys.getOne(taskId),
    queryFn: async () => {
      const { data: task } = await getTask(taskId)
      onSuccess(task)
      return task
    },
  })
}
