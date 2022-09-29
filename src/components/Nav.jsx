export const Nav = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-ligth shadow-sm">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <h3 className="fw-bold ms-5">SIA</h3>
                </div>
                <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" id="link_active" aria-current="page" href="#">Lineas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Mercados</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Legal</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Cobranza</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto me-5">
                        <li className="nav-item">
                            <div id="search-bar">
                                <button type="text" className="form-control serchbar" ><i class="fa-solid fa-magnifying-glass"></i> </button>
                            </div>
                        </li>
                        <li className="nav-item ms-5 .d-none .d-sm-block">
                            <i class="fa-solid fa-gear"></i>
                        </li>
                        <li className="nav-item">
                            <img className="img-user" src="https://interlineales.com/wp-content/uploads/2016/10/dummy-user-img-300x300.png"></img>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

