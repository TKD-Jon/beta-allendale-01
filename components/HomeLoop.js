// Third party Imports
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

//Custom
import changeLink from '../functions/changeLink'

function HomeLoop({ posts }) {
    return (
        <div>
            {
                posts.map(post => (
                    <article 
                        key={post.id} 
                        onClick={() => changeLink(post.link)}
                        className="max-w-sm cursor-pointer rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:scale-95 hover:opacity-75"
                    >
                        <img className="w-full" src={post.acf.featured_image.link} alt="Sunset in the mountains" />
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
    )
}

export default HomeLoop