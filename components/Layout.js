import Header from '../components/Header'

function Layout({ children, header }) {
    return (
        <div>
            <Header global_options={header.acf} />
            <div className="container mx-auto">
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
  }
  
export default Layout