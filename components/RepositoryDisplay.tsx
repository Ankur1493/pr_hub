import RepoCard from "./RepoCard"
import { getUsername } from "@/actions/getUserRepos"
import { GithubRepository } from "@/schemas/repo"

const RepositoryDisplay = async () => {
  const repoCall = await getUsername()
  const userRepos = repoCall.userRepos
  if (repoCall.error) {
    return (<div>Error fetching you github repositories</div>)
  }
  return (
    <div className="w-1/2 h-full flex flex-col justify-center items-center bg-red-400">
      <h1 className="text-4xl font-medium">
        Here are you Repositories
      </h1>
      <div className="border rounded-lg w-3/4">
        {userRepos &&
          userRepos.map((repo: GithubRepository) => (
            <RepoCard id={repo.id} repoName={repo.name} />
          ))
        }
      </div>
    </div>
  )
}

export default RepositoryDisplay
