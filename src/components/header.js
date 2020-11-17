import React from "react"
// import { rhythm, scale } from "../utils/typography"
import { Link } from "gatsby"

const Header = () => {
  let header

  //   if (path === rootPath) {
  header = (
    <div id="header-box">
      <div className="home-header"></div>
      {/* <img src="/images/header.png"></img> */}
      <div className="content-width">
        <Link to="/">
          <div className="home-links1 flex">
            <img src="/images/icons/affexion.png" alt="" />
            <div className="affexion">AFFEXION</div>
          </div>
        </Link>
        <Link to="/cccccc--tue-jun-02-2020-18-33-19-gmt-0900-日本標準時/">
          <div className="home-links2 flex">
            <div className="offical-site">official site</div>
            <img src="/images/icons/email.png" alt="" />
            <img src="/images/icons/twitter.png" alt="" />
            <img src="/images/icons/instagram.png" alt="" />
          </div>
        </Link>
        {/* <Link to="/admin">
          <div className="home-admin">記事投稿</div>
        </Link> */}
        <div className="header-title">アフェクションってどんな会社？</div>
        <div className="header-subtitle">
          web, 3DCG, XR, アプリケーション開発を
          <br />
          行うデザインラボです。
          <br />
          デザインとエンジニアリングを組み合わせ
          <br />
          新たな表現を目標とします。
          <br />
        </div>
        <div className="header-blog">BLOG</div>
      </div>
    </div>
  )

  return header
}

export default Header
