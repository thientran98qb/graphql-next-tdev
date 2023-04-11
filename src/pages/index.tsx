import { Loader } from "@/components/Loader";
import { GET_PRODUCTS } from "@/models/products/query"
import { useQuery } from "@apollo/client"

export default function Home() {
  const {loading, error, data} = useQuery(GET_PRODUCTS)

  if (loading) return <Loader fullHeight/>

  console.log(data);

  return (
    <h1>Hello world</h1>
  )
}
