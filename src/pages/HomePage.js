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
      <div className="field has-addons">
        <p className="control">
          <button className="button is-static is-medium">Search</button>
        </p>
        <p className="control">
          <input
            className="input is-medium input-control"
            type="text"
            placeholder="ramen, nightclubs, nail salons"
          />
        </p>
        <p className="control">
          <button className="button is-static is-medium">Where</button>
        </p>
        <p className="control">
          <input
            className="input is-medium"
            type="text"
            placeholder="Location"
          />
        </p>
      </div>
    </div>
  )
}

export default HomePage
