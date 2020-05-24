import React from "react"

// import Layout from "../components/layout"
import SEO from "../components/seo"
import "./extra.css"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className="cont-404">
      <div className="text-box text-box-404">
        <h1 className="heading-primary">
          PAGE NOT FOUND
              </h1>
        <h1 className="heading-primary-sub">
          Uppps! This page doesn't exist
              </h1>
        <img className="img-404" alt="404" src="https://fidalgo.dev/static/not_found-8b2566d7b70b06305b341a46875e7312.svg" />
      </div>
    </div>
  </>
)

export default NotFoundPage
