import { getUsername } from "@/actions/getUserRepos"
import { GithubRepository } from "@/schemas/repo"
const HomePage = async () => {

  const repoCall = await getUsername()
  const userRepos = repoCall.userRepos

  if (repoCall.error) {
    return <div>Error HomePage <p>{userRepos.error}</p></div>
  }

  return (
    <ul>{userRepos &&
      userRepos.map((repo: GithubRepository) => {
        return (
          <li key={repo.id}>
            <div>{repo.id}</div>
            <div>{repo.name}</div>
          </li>)
      })
    }</ul>
  )
}

export default HomePage
