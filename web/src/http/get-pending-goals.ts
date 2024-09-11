type PendingGoalsResponse = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCounts: number
}[]

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const apiUrl = import.meta.env.VITE_PROD_API_URL
  const response = await fetch(`${apiUrl}/pending-goals`)
  const data = await response.json()
  return data
}
