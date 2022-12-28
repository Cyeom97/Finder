import logo from '../assets/yelp-logo-270.png'

const Nav = () => {
    return (
        <div className="top-nav">
            <div className="nav-left">
                <span>Write a Review</span>
                <span>Events</span>
            </div>
            <div className="nav-right">
                <div className='yelp'>
                    <img src={logo} className="nav-logo" alt="logo"></img>
                    <p>API</p>
                </div>
                <span>Login</span>
                <button className="button">Sign Up</button>
            </div>
        </div>
    )
}

export default Nav