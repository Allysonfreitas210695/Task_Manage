import { CheckIcon, DetailsIcon, LoaderIcon, TrashIcon } from "../assets/icons"
import Button from "./Button"

const TaskItem = ({ task, handleStatusChange, handleRemoveClick }) => {
  const variantTaskColor = {
    done: "bg-[#00ADB5]/10 text-[#00ADB5]",
    in_progress: "bg-[#FFAA04]/10 text-[#FFAA04]",
    not_started: "bg-[#35383E]/10 text-[#35383E]",
  }
  console.log(task)
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
            <LoaderIcon className="animate-spin" />
          )}
        </label>
        {task.title}
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" onClick={() => handleRemoveClick(task.id)}>
          <TrashIcon className={"text-[#9A9C9F]"} />
        </Button>
        <a href="#" className="transition-colors hover:opacity-75">
          <DetailsIcon />
        </a>
      </div>
    </div>
  )
}

export default TaskItem
