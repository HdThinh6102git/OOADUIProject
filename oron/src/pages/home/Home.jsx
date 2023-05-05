import Posts from "../../components/posts/Posts"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <ShareBox/>
        <Posts/>
      </div>
  )
}

export default Home