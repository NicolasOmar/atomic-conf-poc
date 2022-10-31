import { element } from 'prop-types'

const Footer = ({ children = null }) => {
  const renderContent = () => (children ? { children } : null)
  return (
    <footer className="footer">
      <section className="content has-text-centered">
        <p>{renderContent()}</p>
      </section>
    </footer>
  )
}

export default Footer

Footer.propTypes = {
  children: element
}
