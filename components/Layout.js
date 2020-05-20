function Layout({ children }) {
    return <div className="main-layout-container">
        {children}
        <style jsx global>{`
            .main-layout-container {
                background:red;
            }
        `}</style>
    </div>
  }
  
  export default Layout