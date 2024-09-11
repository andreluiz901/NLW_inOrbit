export async function createGoalCompletion(goalId: string) {
  const apiUrl = import.meta.env.VITE_PROD_API_URL
  await fetch(`${apiUrl}/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalId,
    }),
  })
}
