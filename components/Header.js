// Next.js imports
import Head from 'next/head'

function Header({ global_options }) {
    return (
        <header className="bg-gray-400">
            <Head>
            <meta charset='utf-8' />
            <meta http-equiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
            <meta name='description' content="Testing PWA's for the Allendale Inc APP" />
            <meta name='keywords' content='none' />
            <title>Allendale | BETA PWA</title>

            <link rel='manifest' href='/manifest.json' />
            <link rel='apple-touch-icon' href='/apple-icon.png'></link>
            <meta name='theme-color' content='#3a5828' />
            </Head>
            {console.dir(global_options)}
            <div className="
                container 
                mx-auto 
                py-4 
                px-8
                md:px-0
                md:flex 
                items-end
            ">
                <div className="
                    md:flex 
                    md:w-1/4
                ">
                    <div className="md:flex-shrink-0">
                        <img className="md:w-56" src={global_options.logo} />
                    </div>
                </div>
                <div className="md:w-3/4">
                    <h1 className="
                        hidden
                        md:block
                        m-0 
                        text-xl 
                        font-bold 
                        leading-none
                    ">
                        {global_options.site_title}
                    </h1>
                </div>

            </div>
        </header>
    )
}

export default Header