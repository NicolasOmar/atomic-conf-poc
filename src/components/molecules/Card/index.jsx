import { element } from 'prop-types'
import { string } from 'prop-types'
import { arrayOf } from 'prop-types'
import { oneOfType, shape } from 'prop-types'
import Image from '../../atoms/Image'

const Card = ({ header = null, image = null, content = null, footer = null }) => {
  const renderHeader = () =>
    header ? <header className="card-header">{header}</header> : null

  const renderImage = () =>
    image ? (
      <section className="card-image">
        <Image {...image} />
      </section>
    ) : null

  const renderContent = () =>
    content ? (
      <section className="card-content">
        <section className="content">{content}</section>
      </section>
    ) : null

  const renderFooter = () =>
    footer ? (
      <footer className="card-footer">
        {footer.map(({ text }, i) => (
          <a key={`card-footer-${i}`} href="#" className="card-footer-item">
            {text}
          </a>
        ))}
      </footer>
    ) : null

  return (
    <section className="card">
      {renderHeader()}
      {renderImage()}
      {renderContent()}
      {renderFooter()}
    </section>
  )
}

export default Card

Card.propTypes = {
  header: oneOfType([element, arrayOf(element)]),
  image: shape(Image.propTypes),
  content: oneOfType([element, arrayOf(element)]),
  footer: arrayOf(shape({ text: string }))
}
