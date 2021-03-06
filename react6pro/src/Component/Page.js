import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Wrapper from './Wrapper'

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
    <Header/>
    <Sidebar/>
    <div className="page-wrapper">
       <Wrapper/>

        <footer className="footer text-center">
          2021 © Ample Admin brought to you by
          <a href="https://www.wrappixel.com/">wrappixel.com</a>
        </footer>

     </div>
    </div>
  )
}

export default page