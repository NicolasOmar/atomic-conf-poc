import { element, oneOf } from 'prop-types'
// CONSTANTES
import bulmaStyles from '../../../constants/bulma-styles.json'

const { columnSizes, columnOffsets } = bulmaStyles

const Column = ({ size = '1', offset = false, children = null }) => {
  const columnStyles = `column${size ? ` ${columnSizes[size]}` : 'is-1'}${
    offset ? ` ${columnOffsets[offset]}` : ''
  }`

  return <section className={columnStyles}>{children}</section>
}

export default Column

Column.propTypes = {
  size: oneOf(Object.keys(columnSizes)),
  offset: oneOf(Object.keys(columnOffsets)),
  children: element
}
