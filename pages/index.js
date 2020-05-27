// Next.js imports
import Head from 'next/head'

// Third party Imports
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

// Custom Imports
import Layout from '../components/Layout'


function Home({ props }) {
  function changeLink(link) {
    console.log(link)
    location.href = link
  }
  return (
    <Layout header={props.global_options}>
      <Head>
        <title>Allendale Beta PWA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="
        max-w-7xl 
        mx-auto 
        py-12
        px-8
        md:px-0 
        grid 
          grid-cols-1 
          md:grid-cols-3
          gap-8
        ">
        {      
          props.posts.map(post => (
            <article 
              key={post.id} 
              onClick={() => changeLink(post.link)}
              className="
                max-w-sm
                cursor-pointer 
                rounded 
                overflow-hidden 
                shadow-lg 
                transition 
                  duration-500 
                  ease-in-out 
                  transform 
                hover:scale-95 
                hover:opacity-75
              "
            >
                <img className="w-full" src={post.acf.featured_image.url} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <h1 className="font-bold text-xl mb-2">
                      {ReactHtmlParser(post.title.rendered)}
                    </h1>
                    <div className="text-gray-700 text-base">
                      { ReactHtmlParser(post.post_excerpt) }
                    </div>
                </div>
            </article>
          ))
        }
      </div>
    </Layout>
  )
}

Home.getInitialProps = async (ctx) => {
  const home_page_data = await fetch('https://dev.allendale-inc.com/wp-json/wp/v2/mwuc')
  const posts_json = await home_page_data.json()

  const global_options = await fetch('https://dev.allendale-inc.com/wp-json/acf/v3/options/acf-options')
  const GO_json = await global_options.json()
  
  const test = "testing"
  
  return {
    props: {
      posts: posts_json,
      global_options: GO_json
    }
  }
}

export default Home
    