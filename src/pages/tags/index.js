import React from "react"
import Layout from "../../components/layout"

const Test = ({ location }) => {
  const siteTitle = `Tags`
  const test = (
    <Layout location={location} title={siteTitle}>
      <span>All Category Tags</span>
    </Layout>
  )
  return test
}

export default Test
