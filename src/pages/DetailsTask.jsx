import { useForm } from "react-hook-form"
import { Link, useNavigate, useParams } from "react-router"
import { toast } from "sonner"

import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LoaderIcon,
  TrashIcon,
} from "../assets/icons"
import Button from "../components/Button"
import Input from "../components/Input"
import SelectTime from "../components/SelectTime"
import { useRemoveTask } from "../hooks/mutation/remove-task"
import { useUpdateTask } from "../hooks/mutation/update-task"
import { useGetTask } from "../hooks/queries/use-get-task"

const DetailsTask = () => {
  const { id } = useParams()

  const { data: task } = useGetTask({
    taskId: id,
    onSuccess: (task) => reset(task),
  })

  const { mutate: updateTask } = useUpdateTask(task?.id)
  const { mutate: removeTask } = useRemoveTask(task?.id)

  const navigate = useNavigate()
  const {
    register,

    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm()

  const handleBackClick = () => {
    navigate(-1)
  }

  const handleSaveClick = async (data) => {
    updateTask(data, {
      onSuccess: () => {
        toast.success("Tarefa Atualizada com sucesso!")
        navigate(-1)
      },
      onError: () => {
        toast.error("Ocorreu um erro ao salvar a tarefa.")
      },
    })
  }

  const handleDeleteClick = async () => {
    removeTask(undefined, {
      onSuccess: () => {
        toast.success("Tarefa deletada com sucesso!")
        navigate(-1)
      },
      onError: () => toast.error("Ocorreu um erro ao deletar a tarefa."),
    })
  }

  return (
    <div className="flex">
      <div className="w-full space-y-6 px-8 py-16">
        <div className="flex w-full justify-between">
          <div>
            <button
              onClick={handleBackClick}
              className="bg-brand-primary mb-3 flex h-8 w-8 items-center justify-center rounded-full"
            >
              <ArrowLeftIcon />
            </button>
            <div className="flex items-center gap-1 text-xs">
              <Link className="text-brand-text-gray cursor-pointer" to="/">
                Minhas tarefas
              </Link>
              <ChevronRightIcon className="text-brand-text-gray" />
              <span className="text-brand-primary font-semibold">
                {task?.title}
              </span>
            </div>

            <h1 className="mt-2 text-xl font-semibold">{task?.title}</h1>
          </div>

          <Button
            className="h-fit self-end"
            color="danger"
            onClick={handleDeleteClick}
          >
            <TrashIcon />
            Deletar tarefa
          </Button>
        </div>

        <form onSubmit={handleSubmit(handleSaveClick)}>
          <div className="bg-brand-white space-y-6 rounded-xl p-6">
            <div>
              <Input
                id="title"
                label="Título"
                {...register("title", {
                  required: "O título é obrigatório.",
                  validate: (value) => {
                    if (!value.trim()) {
                      return "O título não pode ser vazio."
                    }
                    return true
                  },
                })}
                errorMessage={errors?.title?.message}
              />
            </div>

            <div>
              <SelectTime
                {...register("time", {
                  required: "O horário é obrigatório.",
                })}
                errorMessage={errors?.time?.message}
              />
            </div>

            <div>
              <Input
                id="description"
                label="Descrição"
                {...register("description", {
                  required: "A descrição é obrigatória.",
                  validate: (value) => {
                    if (!value.trim()) {
                      return "A descrição não pode ser vazia."
                    }
                    return true
                  },
                })}
                errorMessage={errors?.description?.message}
              />
            </div>
          </div>
          {/* botão de salvar */}
          <div className="flex w-full justify-end gap-3">
            <Button
              size="large"
              color="primary"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting && <LoaderIcon className="animate-spin" />}
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DetailsTask
