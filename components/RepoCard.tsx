interface RepoCardProps {
  id: number;
  repoName: string;
}

const RepoCard = ({ id, repoName }: RepoCardProps) => {
  return (
    <div key={id}>
      {repoName}
    </div>
  )
}

export default RepoCard
