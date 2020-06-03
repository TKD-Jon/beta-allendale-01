//Custom
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

// Phase 2
function Greeting({ user }) {
// function Greeting() {
    // Phase 2
    // const isLoggedIn = user.status
    console.dir(user)

    if (user.token) {
        return <UserGreeting name={user.user_display_name} />
    } 
    return (
        <GuestGreeting />
    )
}

export default Greeting