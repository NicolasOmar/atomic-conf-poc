import { bool, oneOf, string } from 'prop-types'
// CONSTANTES
import bulmaStyles from '../../../constants/bulma-styles.json'

const { imgSizes } = bulmaStyles

const Image = ({
  src = 'https://bulma.io/images/placeholders/128x128.png',
  description = '',
  isRounded = false,
  fixedSize = null
}) => {
  const imageSize = `image ${imgSizes[fixedSize] ?? ''}`
  const imageStyles = isRounded ? ' is-rounded' : ''

  return (
    <figure className={imageSize}>
      <img
        className={imageStyles}
        src={src}
        alt={description}
        title={description}
        loading="lazy"
      />
    </figure>
  )
}

export default Image

Image.propTypes = {
  src: string,
  description: string,
  isRounded: bool,
  fixedSize: oneOf(Object.keys(imgSizes))
}
