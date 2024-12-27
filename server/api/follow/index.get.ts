import { serverSupabaseUser, serverSupabaseSession } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseSession(event)
})
