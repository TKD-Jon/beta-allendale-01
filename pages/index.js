// Next.js imports
import Head from 'next/head'

// Third party Imports
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

// Custom Imports
import Layout from '../components/Layout'


function Home({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Allendale Beta PWA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Main</h1>
      </main>

      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        {posts.map(post => (
          <article className="p-4 shadow rounded bg-white mb-5">
              <h1 className="text-purple-500 leading-normal">{post.title.rendered}</h1>
              <div className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">{ ReactHtmlParser(post.content.rendered) }</div>
          </article>
          ))}
      </div>

      <footer>
        <h1>Footer</h1>
      </footer>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://www.allendale-inc.com/wp-json/wp/v2/product');
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  }
}

export default Home
    