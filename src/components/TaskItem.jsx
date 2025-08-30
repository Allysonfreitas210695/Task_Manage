const TaskItem = ({ task }) => {
  const variantTaskColor = {
    done: "bg-[#00ADB5]/10 text-[#00ADB5]",
    in_progress: "bg-[#FFAA04]/10 text-[#FFAA04]",
    not_started: "bg-[#35383E]/10 text-[#35383E]",
  }
  return (
    <div
      className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${variantTaskColor[task.status]}`}
    >
      {task.title}
    </div>
  )
}

export default TaskItem
