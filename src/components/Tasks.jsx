import { useState } from "react"
import { toast } from "sonner"

import {
  AddIcon,
  CloudSunIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from "../assets/icons"
import { TASKS } from "../constants/tasks"
import AddTaskDialog from "./AddTaskDialog"
import Button from "./Button"
import TaskItem from "./TaskItem"
import TasksSeparator from "./TasksSeparator"

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS)
  const [openAddTaskDialog, setOpenAddTaskDialog] = useState(false)

  const morningTasks = tasks.filter((task) => task.time === "morning")
  const afternoonTasks = tasks.filter((task) => task.time === "afternoon")
  const eveningTasks = tasks.filter((task) => task.time === "evening")

  function handleTaskStatusChange(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id !== taskId) return task

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

        return { ...task, status: newStatus }
      })
    )
  }

  function handleClearTasks() {
    setTasks([])
  }

  function handleRemoveTask(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
    toast.success("Tarefa removida com sucesso!")
  }

  return (
    <div className="w-full space-y-6 px-[34px] py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-brand-primary text-xs font-semibold">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button text="Nova Tarefa" color="ghost" onClick={handleClearTasks}>
            <TrashIcon />
            Limpar Tarefas
          </Button>

          <Button
            text="Lista Tarefas"
            onClick={() => setOpenAddTaskDialog(true)}
          >
            <AddIcon />
            Adicionar Tarefa
          </Button>
        </div>

        <AddTaskDialog
          isOpen={openAddTaskDialog}
          handleClose={() => setOpenAddTaskDialog(false)}
        />
      </div>

      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator title={"Manhã"} icon={<SunIcon />} />
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleStatusChange={handleTaskStatusChange}
              handleRemoveClick={handleRemoveTask}
            />
          ))}
        </div>

        <div className="my-6 space-y-3">
          <TasksSeparator title={"Tarde"} icon={<CloudSunIcon />} />
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleStatusChange={handleTaskStatusChange}
              handleRemoveClick={handleRemoveTask}
            />
          ))}
        </div>

        <div className="space-y-3">
          <TasksSeparator title={"Noite"} icon={<MoonIcon />} />
          {eveningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleStatusChange={handleTaskStatusChange}
              handleRemoveClick={handleRemoveTask}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
