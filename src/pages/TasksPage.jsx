import { CloudSunIcon, MoonIcon, SunIcon } from "../assets/icons"
import Header from "../components/Header"
import TaskItem from "../components/TaskItem"
import TasksSeparator from "../components/TasksSeparator"
import { useGetTasks } from "../hooks/queries/use-get-tasks"

const TasksPage = () => {
  const { data: tasks } = useGetTasks()

  const morningTasks = tasks?.filter((task) => task.time === "morning")
  const afternoonTasks = tasks?.filter((task) => task.time === "afternoon")
  const eveningTasks = tasks?.filter((task) => task.time === "evening")

  return (
    <div className="w-full space-y-6 px-[34px] py-16">
      <Header title="Minhas Tarefas" />

      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator title={"Manhã"} icon={<SunIcon />} />
          {morningTasks?.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
          {morningTasks?.length === 0 && (
            <p className="text-center text-sm text-gray-400">
              Nenhuma tarefa para este período da manhã.
            </p>
          )}
        </div>

        <div className="my-6 space-y-3">
          <TasksSeparator title={"Tarde"} icon={<CloudSunIcon />} />
          {afternoonTasks?.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
          {afternoonTasks?.length === 0 && (
            <p className="text-center text-sm text-gray-400">
              Nenhuma tarefa para este período da tarde.
            </p>
          )}
        </div>

        <div className="space-y-3">
          <TasksSeparator title={"Noite"} icon={<MoonIcon />} />
          {eveningTasks?.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
          {eveningTasks?.length === 0 && (
            <p className="text-center text-sm text-gray-400">
              Nenhuma tarefa para este período da noite.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default TasksPage
