import { element } from 'prop-types'

const Footer = ({ children = null }) => {
  return children ? (
    <footer className="footer">
      <section className="content has-text-centered">
        <p>{children}</p>
      </section>
    </footer>
  ) : null
}

export default Footer

Footer.propTypes = {
  children: element
}
