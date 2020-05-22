// Third Party
const axios = require('axios').default;

function Header({ global_options }) {
    return (
        <header className="bg-gray-400">
            {console.dir(global_options)}
            <div className="container mx-auto py-4 flex items-end">
                <div className="md:flex w-1/4">
                    <div className="md:flex-shrink-0">
                        <img className="md:w-56" src={global_options.logo} />
                    </div>
                </div>
                <div className="w-3/4">
                    <h1 className="font-bold text-xl m-0 leading-none">{global_options.site_title}</h1>
                </div>

            </div>
        </header>
    )
}

export default Header