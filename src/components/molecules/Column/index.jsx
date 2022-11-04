import { element, object, oneOf } from 'prop-types'
// CONSTANTES
import bulmaStyles from '../../../constants/bulma-styles.json'

const { columnSizes, columnOffsets } = bulmaStyles

const Column = ({ size = '1', offset = false, children = null, styles = {} }) => {
  const columnStyles = `column${size ? ` ${columnSizes[size]}` : 'is-1'}${
    offset ? ` ${columnOffsets[offset]}` : ''
  }`
  console.warn(styles)

  return (
    <section className={columnStyles} style={styles}>
      {children}
    </section>
  )
}

export default Column

Column.propTypes = {
  size: oneOf(Object.keys(columnSizes)),
  offset: oneOf(Object.keys(columnOffsets)),
  children: element,
  styles: object
}
