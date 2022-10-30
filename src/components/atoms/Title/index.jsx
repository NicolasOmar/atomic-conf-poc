import { string, oneOf } from 'prop-types'
import bulmaStyles from '../../../constants/bulma-styles.json'

const { size } = bulmaStyles

const Title = ({
  title = null,
  titleSize = 'default',
  subtitle = null,
  subtitleSize = 'default'
}) => {
  const titleStyle = `title ${size[titleSize]}`
  const subtitleStyle = `title ${size[subtitleSize]}`

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
  titleSize: oneOf(Object.keys(size)),
  subtitle: string,
  subtitleSize: oneOf(Object.keys(size))
}
