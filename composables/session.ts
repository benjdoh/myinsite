export async function getSession() {
  try {
    const result = await $fetch<string>('https://login.macys.net/sso/json/sessions?_action=getSessionInfo', {
      method: 'post',
      onResponseError(e) {
        console.log(e)
      },
    })

    return result
  } catch (error) {}
}

export async function useAuthenticate() {
  try {
    const result = await $fetch<{
      authId: string
      stage: string
    }>('https://login.macys.net/sso/json/realms/root/realms/insiterealm/authenticate', {
      method: 'post',
    })

    return result
  } catch (error) {}
}
