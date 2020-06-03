function GuestGreeting() {
    return (
        <div className="rounded bg-gray-200 p-4 border-solid border-2 border-gray-400 shadow-md">
            <h1 className="m-0 text-xl font-bold leading-none">Heads Up!</h1>
            <p>You are not logged in.</p>
            <button className="bg-green-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-2 rounded">Login</button>
        </div>
    )
}

export default GuestGreeting