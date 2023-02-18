import { NextPage } from "next"
import { useQuery, withWunderGraph } from "../components/generated/nextjs"

const Home: NextPage = () => {
  const result = useQuery({ operationName: "allUsers" })
  const refresh = () => {
    result.mutate()
  }
  return (
    <div>
      <code className="p-3" data-testid="result">
        {JSON.stringify(result, null, 2)}
      </code>
    </div>
  )
}

export default withWunderGraph(Home)
