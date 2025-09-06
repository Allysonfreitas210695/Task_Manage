export const taskMutationKeys = {
  create: () => ["create-task"],
  update: (taskId) => ["update-task", taskId],
  delete: (taskId) => ["delete-task", taskId],
  deleteAll: (tasks) => ["delete-task-all", tasks],
}
