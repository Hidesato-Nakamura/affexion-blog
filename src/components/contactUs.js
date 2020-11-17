import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

export default function ContactUs() {
  return (
    <span className="contact-us-box">
      <div className="contact-us">CONTACT US</div>
      <div className="otoiawase">お問い合わせはお気軽に。</div>

      <div className="scroll-to-top">
        <div onClick={() => scrollTo("#header")} className="upper-arrow" />
        <div onClick={() => scrollTo("#header")} className="top">
          top
        </div>
      </div>
    </span>
  )
}
