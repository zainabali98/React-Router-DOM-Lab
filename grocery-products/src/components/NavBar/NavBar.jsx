import {Link} from 'react-router'


function NavBar() {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/new-product">New Products</Link>
        </nav>
    </div>
  )
}

export default NavBar