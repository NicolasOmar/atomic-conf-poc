import { bool, oneOf, string } from 'prop-types'
import bulmaStyles from '../../../constants/bulma-styles.json'

const { imgSizes } = bulmaStyles

const Image = ({
  src = 'https://bulma.io/images/placeholders/128x128.png',
  isRounded = false,
  fixedSize = null
}) => {
  const imageSize = `image ${imgSizes[fixedSize] ?? ''}`
  const imageStyles = isRounded ? ' is-rounded' : ''

  return (
    <figure className={imageSize}>
      <img className={imageStyles} src={src} alt="" />
    </figure>
  )
}

export default Image

Image.propTypes = {
  src: string,
  isRounded: bool,
  fixedSize: oneOf(Object.keys(imgSizes))
}
