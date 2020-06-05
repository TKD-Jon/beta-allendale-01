// Custom Imports
import Layout from '../components/Layout';
import HomeLoop from '../components/HomeLoop';
import Greeting from '../components/greetings/Greeting';


function Home({ props }) {
  return (
    <Layout header={props.global_options}>
      <div className="max-w-7xl mx-auto py-12 px-8 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Greeting user={props.user} />
        <HomeLoop posts={props.posts} />
      </div>
    </Layout>
  )
}

Home.getInitialProps = async (ctx) => {
  let siteURL = 'https://dev.allendale-inc.com/wp-json'
  const home_page_data = await fetch(`${siteURL}/wp/v2/mwuc`)
  const posts_json = await home_page_data.json()

  const global_options = await fetch(`${siteURL}/acf/v3/options/acf-options`)
  const GO_json = await global_options.json()

  const user_call = await fetch(`${siteURL}/jwt-auth/v1/token?username=tkdigital&password=XI3Z0z0*VXIdyM%23mFb%26uBv^%26_$`, {method: "post"})
  const user_json = await user_call.json()

  
  console.dir(GO_json)
  
  return {
    props: {
      posts: posts_json,
      global_options: GO_json,
      user: user_json
    }
  }
}

export default Home
    