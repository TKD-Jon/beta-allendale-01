// Third Party
const axios = require('axios').default;

function Header({ global_options }) {
    return (
        <header className="bg-gray-400">
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