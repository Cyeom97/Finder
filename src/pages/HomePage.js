import logo from '../assets/yelp-logo-270.png'
const HomePage = () => {
  return (
    <div>
      <div className="titles">
        <h1 className="home-title">Finder</h1>
        <div className="home-yelp">
          <p>A</p>
          <img src={logo} className="home-logo" alt="logo"></img>
          <p>API</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
