import { LoaderIcon, Tasks2Icon, TasksIcon } from "../assets/icons"
import { useGetTasks } from "../hooks/queries/use-get-tasks"
import DashboardCard from "./DashboardCard"

const DashboardCards = () => {
  const { data: tasks } = useGetTasks()

  const notStartedTasks =
    tasks?.filter((task) => task.status === "not_started").length || 0
  const inProgressTasks =
    tasks?.filter((task) => task.status === "in_progress").length || 0
  const completedTasks =
    tasks?.filter((task) => task.status === "done").length || 0

  return (
    <div className="mt-6 flex gap-[43px]">
      <DashboardCard
        icon={<Tasks2Icon className="text-brand-primary" />}
        value={tasks?.length}
        title="Tarefas totais"
      />
      <DashboardCard
        icon={<LoaderIcon className="text-brand-primary" />}
        value={notStartedTasks}
        title="Tarefas não iniciadas"
      />
      <DashboardCard
        icon={<LoaderIcon className="text-brand-primary" />}
        value={inProgressTasks}
        title="Tarefas em andamento"
      />
      <DashboardCard
        icon={<TasksIcon className="text-brand-primary" />}
        value={completedTasks}
        title="Tarefas concluídas"
      />
    </div>
  )
}

export default DashboardCards
