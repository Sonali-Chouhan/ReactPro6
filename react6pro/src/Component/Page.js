import React from 'react'

const page = () => {
  return (
    <div
    id="main-wrapper"
    data-layout="vertical"
    data-navbarbg="skin5"
    data-sidebartype="full"
    data-sidebar-position="absolute"
    data-header-position="absolute"
    data-boxed-layout="full"
  >
    <header className="topbar" data-navbarbg="skin5">
      <nav className="navbar top-navbar navbar-expand-md navbar-dark">
        <div className="navbar-header" data-logobg="skin6">
          <a className="navbar-brand" href="index.html">
            <b className="logo-icon">
              <img src="plugins/images/logo-icon.png" alt="homepage" />
            </b>

            <span className="logo-text">
              <img src="plugins/images/logo-text.png" alt="homepage" />
            </span>
          </a>

          <a
            className="
              nav-toggler
              waves-effect waves-light
              text-dark
              d-block d-md-none
            "
            href="javascript:void(0)"
          >
            <i className="ti-menu ti-close"></i>
          </a>
        </div>

        <div
          className="navbar-collapse collapse"
          id="navbarSupportedContent"
          data-navbarbg="skin5"
        >
          <ul className="navbar-nav d-none d-md-block d-lg-none">
            <li className="nav-item">
              <a
                className="
                  nav-toggler nav-link
                  waves-effect waves-light
                  text-white
                "
                href="javascript:void(0)"
              >
                <i className="ti-menu ti-close"></i>
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="in">
              <form
                role="search"
                className="app-search d-none d-md-block me-3"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="form-control mt-0"
                />
                <a href="" className="active">
                  <i className="fa fa-search"></i>
                </a>
              </form>
            </li>

            <li>
              <a className="profile-pic" href="#">
                <img
                  src="../plugins/images/users/varun.jpg"
                  alt="user-img"
                  width="36"
                  className="img-circle"
                />
                <span className="text-white font-medium">Steave</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <aside className="left-sidebar" data-sidebarbg="skin6">
      <div className="scroll-sidebar">
        <nav className="sidebar-nav">
          <ul id="sidebarnav">
            <li className="sidebar-item pt-2">
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="index.html"
                aria-expanded="false"
              >
                <i className="far fa-clock" aria-hidden="true"></i>
                <span className="hide-menu">Dashboard</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="profile.html"
                aria-expanded="false"
              >
                <i className="fa fa-user" aria-hidden="true"></i>
                <span className="hide-menu">Profile</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="basic-table.html"
                aria-expanded="false"
              >
                <i className="fa fa-table" aria-hidden="true"></i>
                <span className="hide-menu">Basic Table</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="fontawesome.html"
                aria-expanded="false"
              >
                <i className="fa fa-font" aria-hidden="true"></i>
                <span className="hide-menu">Page</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="map-google.html"
                aria-expanded="false"
              >
                <i className="fa fa-globe" aria-hidden="true"></i>
                <span className="hide-menu">Google Map</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="blank.html"
                aria-expanded="false"
              >
                <i className="fa fa-columns" aria-hidden="true"></i>
                <span className="hide-menu">Login Page</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link waves-effect waves-dark sidebar-link"
                href="404.html"
                aria-expanded="false"
              >
                <i className="fa fa-info-circle" aria-hidden="true"></i>
                <span className="hide-menu">Error 404</span>
              </a>
            </li>
            <li className="text-center p-20 upgrade-btn">
              <a
                href="https://www.wrappixel.com/templates/ampleadmin/"
                className="btn d-grid btn-danger text-white"
                target="_blank"
              >
                Upgrade to Pro
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
    <div className="page-wrapper">
        <div className="page-breadcrumb bg-white">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h4 className="page-title">Icon Fontawesome</h4>
            </div>
            <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
              <div className="d-md-flex">
                <ol className="breadcrumb ms-auto">
                  <li>
                    <a href="/" className="fw-normal">
                      Dashboard
                    </a>
                  </li>
                </ol>
                <a
                  href="https://www.wrappixel.com/templates/ampleadmin/"
                  target="_blank"
                  className="
                    btn btn-danger
                    d-none d-md-block
                    pull-right
                    ms-3
                    hidden-xs hidden-sm
                    waves-effect waves-light
                    text-white
                  "
                >
                  Upgrade to Pro
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer text-center">
          2021 © Ample Admin brought to you by
          <a href="https://www.wrappixel.com/">wrappixel.com</a>
        </footer>

     </div>
    </div>
  )
}

export default page