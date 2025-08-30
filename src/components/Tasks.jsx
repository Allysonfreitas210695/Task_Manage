import Button from "./Button"
import AddIcon from "../assets/icons/add.svg?react"
import TrashIcon from "../assets/icons/trash.svg?react"
import SunIcon from "../assets/icons/sun.svg?react"
import MoonIcon from "../assets/icons/moon.svg?react"
import CloudIcon from "../assets/icons/cloud-sun.svg?react"
import TasksSeparator from "./TasksSeparator"

const Tasks = () => {
  return (
    <div className="w-full px-[34px] py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button text="Nova Tarefa" variant="ghost">
            <TrashIcon />
            Limpar Tarefas
          </Button>

          <Button text="Lista Tarefas">
            <AddIcon />
            Adicionar Tarefa
          </Button>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator title={"Manhã"} icon={<SunIcon />} />
        </div>

        <div className="my-6 space-y-3">
          <TasksSeparator title={"Tarde"} icon={<CloudIcon />} />
        </div>

        <div className="space-y-3">
          <TasksSeparator title={"Noite"} icon={<MoonIcon />} />
        </div>
      </div>
    </div>
  )
}

export default Tasks
