import { githubApi } from "../api/github"

export const GetProfile = async () => {
  const result = githubApi.get('/users/JVMedeiros')

  console.log('result data -->', (await result).data)

  return result
}