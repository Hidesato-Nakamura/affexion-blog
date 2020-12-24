import React from "react"
// import { rhythm, scale } from "../utils/typography"
import { Link } from "gatsby"
import Image from "./customImage.js"
import P from "../p5/p5"

const Header = () => {
  let header
  //   if (path === rootPath) {
  header = (
    <div id="header-box">
      {/* <div className="home-header"></div> */}
      {/* <img src="/images/header.png"></img> */}
      <iframe
        id="inlineFrameExample"
        title="glsl"
        width="100%"
        className="header-iframe"
        style={{ position: `absolute`, zIndex: -10, border: `none` }}
        src="https://fluid-9333d.firebaseapp.com/"
        // src="http://localhost:8887/"
        arrow="true"
      ></iframe>
      {/* <P/> */}
      <div className="content-width">
        <Link to="/">
          <div className="logo">
            <Image filename="affexion-logo.png" />
          </div>
        </Link>
        {/* <img src="https://fluid-9333d.firebaseapp.com/"/> */}
        {/* <Link to="/cccccc--tue-jun-02-2020-18-33-19-gmt-0900-日本標準時/"> */}
        <div className="home-links2 flex">
          <div className="offical-site">
            <a
              href="http://affexion.jp"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: `#000`, textDecoration: `none` }}
            >
              official site
            </a>
          </div>

          <div className="contact-infomation">
            <a
              href="mailto:user@dammy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image filename="email.png" />
            </a>
          </div>

          <div className="contact-infomation">
            <a
              href="https://twitter.com/affexionAR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image filename="twitter.png" />
            </a>
          </div>
          <div className="contact-infomation">
            <a
              href="https://www.instagram.com/afx_cgmotion/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image filename="instagram.png" />
            </a>
          </div>

          {/* <img src="/images/icons/email.png" alt="" />
            <img src="/images/icons/twitter.png" alt="" />
            <img src="/images/icons/instagram.png" alt="" /> */}
        </div>
        {/* </Link> */}
        {/* <Link to="/admin">
          <div className="home-admin">記事投稿</div>
        </Link> */}
        {/* <div className="header-title">アフェクションってどんな会社？</div> */}
        <div className="header-discription">
          <span className="head">
            アフェクションってどんな会社？ <br />
          </span>
          <span>
            web, 3DCG, XR, アプリケーション開発を
            <br />
          </span>
          <span>
            行うデザインラボです。
            <br />
          </span>
          <span>
            デザインとエンジニアリングを組み合わせ <br />
          </span>
          <span>新たな表現を目標とします。</span>
        </div>
        <div className="header-blog">
          <Image filename="blog-title_11.png" />
        </div>
        <div className="scroll-image">
          <Image filename="scroll-nigiyakashi.png" />
        </div>
      </div>
    </div>
  )

  return header
}

export default Header
