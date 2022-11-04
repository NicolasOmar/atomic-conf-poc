import { string, oneOf, bool } from 'prop-types'
// CONSTANTES
import bulmaStyles from '../../../constants/bulma-styles.json'

const { textSizes } = bulmaStyles

const Title = ({
  title = null,
  titleSize = 'default',
  subtitle = null,
  subtitleSize = 'default',
  isCentered = false
}) => {
  const titleStyle = `title ${textSizes[titleSize]}${
    isCentered ? ' has-text-centered' : ''
  }`
  const subtitleStyle = `title ${textSizes[subtitleSize]}${
    isCentered ? ' has-text-centered' : ''
  }`

  return (
    <>
      {title ? <h1 className={titleStyle}>{title}</h1> : null}
      {subtitle ? <h2 className={subtitleStyle}>{subtitle}</h2> : null}
    </>
  )
}

export default Title

Title.propTypes = {
  title: string,
  titleSize: oneOf(Object.keys(textSizes)),
  subtitle: string,
  subtitleSize: oneOf(Object.keys(textSizes)),
  isCentered: bool
}
