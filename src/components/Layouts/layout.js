import React from "react"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import "../../Styles/layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
