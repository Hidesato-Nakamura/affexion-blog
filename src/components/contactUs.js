import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

export default function ContactUs() {
  return (
    <span className="contact-us-box">
      <div className="contact-us">CONTACT US</div>
      <div className="otoiawase">お問い合わせはお気軽に。</div>
      <div className="scroll-to-top">
        <div
          onClick={() => scrollTo("#header")}
          onKeyDown={function () {}}
          aria-label="a"
          className="upper-arrow"
          role="button"
          tabIndex="0"
        />
        <div
          onClick={() => scrollTo("#header")}
          onKeyDown={function () {}}
          className="top"
          role="button"
          tabIndex="0"
        >
          top
        </div>
      </div>
    </span>
  )
}
