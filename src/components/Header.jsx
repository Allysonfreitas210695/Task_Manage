import { useState } from "react"
import { toast } from "sonner"

import { AddIcon, TrashIcon } from "../assets/icons"
import { useRemoveAllTasks } from "../hooks/mutation/remove-all-tasks"
import { useGetTasks } from "../hooks/queries/use-get-tasks"
import AddTaskDialog from "./AddTaskDialog"
import Button from "./Button"

const Header = ({ title }) => {
  const [openAddTaskDialog, setOpenAddTaskDialog] = useState(false)

  const removeAllTasksMutation = useRemoveAllTasks()
  const { data: tasks } = useGetTasks()

  function handleClearAll() {
    removeAllTasksMutation.mutate(tasks, {
      onSuccess: () => toast.success("Todas as tarefas foram removidas!"),
      onError: (err) => toast.error(err.message),
    })
  }

  return (
    <div className="flex w-full justify-between">
      <div>
        <span className="text-brand-primary text-xs font-semibold">
          {title}
        </span>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <div className="flex items-center gap-3">
        <Button text="Nova Tarefa" color="ghost" onClick={handleClearAll}>
          <TrashIcon />
          Limpar Tarefas
        </Button>

        <Button text="Lista Tarefas" onClick={() => setOpenAddTaskDialog(true)}>
          <AddIcon />
          Adicionar Tarefa
        </Button>
      </div>

      <AddTaskDialog
        isOpen={openAddTaskDialog}
        handleClose={() => setOpenAddTaskDialog(false)}
      />
    </div>
  )
}

export default Header
