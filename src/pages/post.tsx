import { useRouter } from "next/router"
import Layout from "components/Layout"

const Post: React.FC = () => {
  const router = useRouter()
  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is the blog post container</p>
    </Layout>
  )
}

export default Post
