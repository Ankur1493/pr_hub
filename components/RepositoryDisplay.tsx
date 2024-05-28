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
    <div className="w-2/3 pt-2 h-full flex gap-4 flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">
        Here are you Repositories
      </h1>
      <div className="min-h-[80%] overflow-y-scroll mb-16 rounded-lg w-[90%] grid grid-cols-2 gap-2">
        {userRepos &&
          userRepos.map((repo: GithubRepository) => (
            <RepoCard
              key={repo.id}
              id={repo.id}
              repoName={repo.name}
              url={repo.html_url}
              language={repo.language !== null ? repo.language : undefined}
              stars={repo.stargazers_count}
              homePage={repo.homepage !== null ? repo.homepage : undefined}
              forked={repo.fork}
            />
          ))
        }
      </div>
    </div>
  )
}

export default RepositoryDisplay
