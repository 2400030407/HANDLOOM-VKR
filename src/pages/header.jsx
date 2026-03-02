import { Link } from 'react-router-dom'

export default function Header({ currentUser, onLogout }) {
  return (
    <header className="header">
      <div className="container nav">
        <div className="brand-block">
          <div className="brand-logo">HF</div>
          <div>
            <h1>Handloom Fashion</h1>
            <p className="brand-tagline">Fashion made by artisans</p>
          </div>
        </div>

        <div className="header-search-wrap">
          <input
            type="search"
            className="header-search"
            placeholder="Search for products, brands and more"
            aria-label="Global search"
          />
        </div>

        <nav className="top-nav">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
          {!currentUser ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          ) : (
            <>
              <span className="user-greeting">Hi, {currentUser.name}</span>
              <button type="button" className="link-button" onClick={onLogout}>
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
