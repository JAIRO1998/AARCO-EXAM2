export const Nav = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-ligth shadow-sm">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <h3 className="fw-bold ms-5">SIA</h3>
                </div>
                <div class="form-group has-feedback d-none d-sm-block d-xl-none d-lg-none d-xl-block">
                    <i class="fa-solid fa-magnifying-glass form-control-feedback"></i>
                    <input type="text" class="form-control" placeholder="" />
                </div>
                <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon pt-1"><i className="fa-solid fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav">
                        <li>
                            <div class="form-group has-feedback d-block d-sm-none">
                                <i class="fa-solid fa-magnifying-glass form-control-feedback"></i>
                                <input type="text" class="form-control" placeholder="" />
                            </div>
                        </li>
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
                        <li className="nav-item  me-3">
                            <div class="form-group has-feedback serchbar d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
                                <i class="fa-solid fa-magnifying-glass form-control-feedback"></i>
                                <input type="text" class="form-control" placeholder="" />
                            </div>
                        </li>
                        <li className="nav-item">
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

