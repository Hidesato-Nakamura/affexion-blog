import React from "react"
import { Link } from "gatsby"

export const MainCard = ({ node }) => {
  const frontmatter = node.frontmatter
  const slug = node.fields.slug
  let card = (
    <Link to={slug} style={{ textDecoration: "none" }}>
      <section className="main-card flex">
        <div className="card-img-block main">
          <img src={frontmatter.featuredimage} alt="" />
        </div>

        <div className="card-content">
          <div className="tag flex">
            {frontmatter.tags.map((tag, index) => {
              return <div key={index}>#{tag}</div>
            })}
          </div>
          <div className="title">{frontmatter.title}</div>
          <div className="date">{frontmatter.date}</div>
          <div className="text">{frontmatter.description}</div>
        </div>
      </section>
    </Link>
  )
  return card
}

export const SubCard = ({ node, rank }) => {
  const frontmatter = node.frontmatter
  const slug = node.fields.slug
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName("body")[0],
    wi = w.innerWidth || e.clientWidth || g.clientWidth,
    he = w.innerHeight || e.clientHeight || g.clientHeight
  console.log("wi=" + wi)
  let card = (
    <Link to={slug} style={{ textDecoration: "none" }}>
      <section className="sub-card">
        <div className="card-img-block">
          <img src={frontmatter.featuredimage} alt="" />
        </div>

        <div className="card-content">
          <div className="date">{frontmatter.date}</div>
          <div className="title flex">
            {rank > 0 ? (
              <div>
                {rank}位 : {frontmatter.title}
              </div>
            ) : (
              <div>{frontmatter.title}</div>
            )}
          </div>
          {rank > 0 && wi < 750 ? null : (
            <div className="tag flex">
              {frontmatter.tags.map((tag, index) => {
                return <div key={index}>#{tag}</div>
              })}
            </div>
          )}

          {/* <div className="text">{frontmatter.description}</div> */}
        </div>
        <div className="profile flex">
          <div
            className="avatar"
            style={{ backgroundColor: frontmatter.color }}
          />
          <div className="name">{frontmatter.contributor}</div>
        </div>
      </section>
    </Link>
  )
  return card
}
