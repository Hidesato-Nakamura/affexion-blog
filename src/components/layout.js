import React from "react"
// import { Link } from "gatsby"
// import Banner from "../components/banner"
import Header from "../components/header"
import CategoryBar from "../components/categoryBar"
import ContactUs from "../components/contactUs"
import Footer from "../components/footer"
import Ranking from "../components/ranking"
// import BackgroundImage from "../../static/images/gumma_05.png"
// import CategoryCard from "../components/categoryCard"
// import PopularCard from "../components/popularCard"
// import ProfileCard from "../components/profileCard"

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div>
      <header id="header">
        <Header />
      </header>

      <div className="turu">
        <main>
          <div className="children">{children}</div>
        </main>
        <Ranking />
        <CategoryBar />
        <ContactUs />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
