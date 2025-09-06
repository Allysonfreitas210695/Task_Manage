import { api } from "../lib/axios"

export async function getTask(taskId) {
  try {
    return await api.get(`/tasks/${taskId}`)
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data?.message || "Erro ao criar tarefa")
    }

    throw new Error("Erro de conexão com o servidor")
  }
}

export async function createTask(newTask) {
  try {
    const { data } = await api.post("/tasks", newTask)
    return data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data?.message || "Erro ao criar tarefa")
    }

    throw new Error("Erro de conexão com o servidor")
  }
}

export async function updateTask(task) {
  try {
    const { data } = await api.put(`/tasks/${task.id}`, task)
    return data
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data?.message || "Erro ao atualizar tarefa"
      )
    }
    throw new Error("Erro de conexão com o servidor")
  }
}

export async function removeTask(taskId) {
  try {
    await api.delete(`/tasks/${taskId}`)
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data?.message || "Erro ao remover a tarefa"
      )
    }
    throw new Error("Erro de conexão com o servidor")
  }
}

export async function updateTaskStatus(taskId, newStatus) {
  try {
    await api.patch(`/tasks/${taskId}`, { status: newStatus })
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data?.message || "Erro ao atualizar o status da tarefa"
      )
    }
    throw new Error("Erro de conexão com o servidor")
  }
}

async function deleteTaskById(taskId) {
  try {
    await api.delete(`/tasks/${taskId}`)
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data?.message || "Erro ao remover a tarefa"
      )
    }
    throw new Error("Erro de conexão com o servidor")
  }
}

export async function removeAllTasks(tasks) {
  try {
    await Promise.all(tasks.map((task) => deleteTaskById(task.id)))
    return true
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data?.message || "Erro ao remover todas as tarefas"
      )
    }
    throw new Error("Erro de conexão com o servidor")
  }
}
