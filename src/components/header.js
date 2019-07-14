import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { DefaultButton, Stack } from 'office-ui-fabric-react';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#aff8db`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        marignLeft: '0 auto',
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0}}>
        <Stack horizontal gap={250}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <Stack horizontal gap={10}>
        <DefaultButton styles={{ root: {backgroundColor: '#ff9cee', border: 'none'}}}>Now</DefaultButton>
        <DefaultButton styles={{ root: {backgroundColor: '#ff9cee', border: 'none'}}}>Travel</DefaultButton>
        <DefaultButton styles={{ root: {backgroundColor: '#ff9cee', border: 'none'}}}>Resume</DefaultButton>
        </Stack>
        </Stack>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
