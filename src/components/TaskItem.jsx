import { toast } from "sonner"

import { CheckIcon, DetailsIcon, LoaderIcon, TrashIcon } from "../assets/icons"
import { useRemoveTask } from "../hooks/mutation/remove-task"
import { useUpdateTaskStatus } from "../hooks/mutation/update-task-status"
import Button from "./Button"

const TaskItem = ({ task }) => {
  const variantTaskColor = {
    done: "bg-brand-primary/10 text-brand-primary",
    in_progress: "bg-brand-process/10 text-brand-process",
    not_started: "bg-brand-dark-blue/10 text-brand-dark-blue",
  }

  const updateStatusMutation = useUpdateTaskStatus()

  const removeTaskMutation = useRemoveTask()

  function handleStatusChange(taskId) {
    let newStatus = "not_started"
    if (task.status === "not_started") {
      toast.success("Tarefa iniciada!")
      newStatus = "in_progress"
    } else if (task.status === "in_progress") {
      toast.success("Tarefa concluída!")
      newStatus = "done"
    } else {
      toast.success("Tarefa Pendente!")
    }
    updateStatusMutation.mutate({ taskId, newStatus })
  }

  function handleRemoveClick(taskId) {
    toast.success("Tarefa removida!")
    removeTaskMutation.mutate(taskId)
  }

  return (
    <div
      className={`flex w-full items-center justify-between gap-2 rounded-lg px-4 py-3 text-sm transition ${variantTaskColor[task.status]}`}
    >
      <div className="flex items-center gap-3">
        <label
          htmlFor={`time-${task.id}`}
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${variantTaskColor[task.status]}`}
        >
          <input
            type="checkbox"
            id={`time-${task.id}`}
            className="absolute h-full w-full cursor-pointer opacity-0"
            checked={task.status === "done"}
            onChange={() => handleStatusChange(task.id)}
          />
          {task.status === "done" && <CheckIcon />}
          {task.status === "in_progress" && (
            <LoaderIcon className="text-brand-white animate-spin" />
          )}
        </label>
        {task.title}
      </div>

      <div className="flex items-center gap-2">
        <Button color="ghost" onClick={() => handleRemoveClick(task.id)}>
          <TrashIcon className={"text-brand-text-gray"} />
        </Button>
        <a href="#" className="transition-colors hover:opacity-75">
          <DetailsIcon />
        </a>
      </div>
    </div>
  )
}

export default TaskItem
