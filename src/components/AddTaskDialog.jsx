import { zodResolver } from "@hookform/resolvers/zod"
import PropTypes from "prop-types"
import { createPortal } from "react-dom"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { LoaderIcon } from "../assets/icons"
import { useCreateTask } from "../hooks/mutation/create-task"
import { taskSchema } from "../types/taskSchema"
import Button from "./Button"
import Input from "./Input"

const AddTaskDialog = ({ isOpen, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      description: "",
      time: "morning",
    },
  })

  const createTaskMutation = useCreateTask()

  if (!isOpen) return null

  function handleCancel() {
    reset()
    handleClose()
  }

  function onSubmit(data) {
    createTaskMutation.mutate(
      { ...data, status: "not_started" },
      {
        onSuccess: () => {
          toast.success("Tarefa adicionada com sucesso!")
          reset()
          handleClose()
        },
        onError: (err) => {
          toast.error(err.message)
        },
      }
    )
  }

  return createPortal(
    <div className="fixed inset-0 flex h-screen w-screen items-center justify-center backdrop-blur-xs">
      <div className="rounded-xl bg-white p-5 text-center shadow">
        <h2 className="text-brand-dark-blue text-xl font-semibold">
          Adicionar Nova Tarefa
        </h2>
        <p className="text-brand-text-gray mt-1 text-sm">
          Insira as informações abaixo
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <Input
            label="Título"
            id="title"
            placeholder="Título da tarefa"
            errorMessage={errors.title?.message}
            {...register("title")}
          />
          <Input
            label="Horário"
            id="time"
            placeholder=""
            errorMessage={errors.time?.message}
            {...register("time")}
          />
          <Input
            label="Descrição"
            id="description"
            placeholder="Descreva a tarefa"
            errorMessage={errors.description?.message}
            {...register("description")}
          />
          <div className="flex gap-3">
            <Button
              size="large"
              className="w-full"
              color="secondary"
              onClick={handleCancel}
              type="button"
            >
              Cancelar
            </Button>
            <Button
              size="large"
              className="w-full"
              disabled={isSubmitting || createTaskMutation.isLoading}
              type="submit"
            >
              {(isSubmitting || createTaskMutation.isLoading) && (
                <LoaderIcon className="animate-spin" />
              )}
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  )
}

AddTaskDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default AddTaskDialog
