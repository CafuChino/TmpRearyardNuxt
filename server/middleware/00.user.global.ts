import type { H3Event } from 'h3'
import { useEnv } from '../utils/useEnv'
import { serverSupabaseUser } from '#supabase/server'

function throwNoAuthError(event: H3Event) {
  return createError({
    statusCode: 401,
    statusText: 'Auth Required',
  })
}

export default defineEventHandler(async (event) => {
  const path = event.path
  if (!path.startsWith('/api')) {
    return
  }
  const { isDev } = useEnv()
  const fakeUser = getHeader(event, 'ry-fake-user')
  if (isDev && fakeUser) {
    // TODO: fake
  }
  try {
    const user = await serverSupabaseUser(event)
    event.context.user = user
  }
  catch (e) {
    console.error(e)
    return throwNoAuthError(event)
  }
})
