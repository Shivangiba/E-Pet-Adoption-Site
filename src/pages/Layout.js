import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand  text-danger-subtle" href="#">E-Pet Adoption Shop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Add" >Add</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/pets">Pets</Link>
                    </li>

                  </ul>

                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col m-3">
            <Outlet />
          </div>
        </div>
        </div>
     
    </>
  );
}


export default Layout;