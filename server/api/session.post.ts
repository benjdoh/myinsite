type Return = {
  code: number
  message: string
  reason: string
}

export default defineEventHandler(async (event) => {
  const response = await event.fetch('https://login.macys.net/sso/json/sessions?_action=getSessionInfo', {
    method: 'post',
    headers: {
      'Content-Api-Version': 'resource=2.1',
    },
  })

  setHeaders(event, Object.fromEntries(response.headers))

  return (await response.json()) as Return
})
