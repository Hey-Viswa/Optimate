import { z } from 'zod'

export const EditUserProfileSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
})

export const WorkflowFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
})

export type EditUserProfileType = z.infer<typeof EditUserProfileSchema>
export type WorkflowFormType = z.infer<typeof WorkflowFormSchema>
