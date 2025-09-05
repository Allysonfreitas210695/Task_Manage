import z from "zod"

export const taskSchema = z.object({
  title: z.string().min(1, { message: "titulo é obrigatório." }),
  description: z.string().min(1, { message: "descrição é obrigatório." }),
  time: z.enum(["morning", "afternoon", "evening"]).default("morning"),
})
