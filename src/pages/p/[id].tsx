import fetch from "isomorphic-unfetch"
import Layout from "components/Layout"

const Post = ({ show }) => (
  <Layout>
    <h1>{show.name}</h1>
    <p>{show.summary.replace(/<[/]?[pb]>/g, "")}</p>
    {show.image ? <img src={show.image.medium} alt="text" /> : null}
  </Layout>
)

Post.getInitialProps = async context => {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  // console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
