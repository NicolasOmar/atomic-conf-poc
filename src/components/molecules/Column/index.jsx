import { element, oneOf } from 'prop-types'
import bulmaStyles from '../../../constants/bulma-styles.json'

const { columnSizes } = bulmaStyles

const Column = ({ size = '1', children = null }) => (
  <section className={`column ${size ? columnSizes[size] : 'is-1'}`}>{children}</section>
)

export default Column

Column.propTypes = {
  size: oneOf(Object.keys(columnSizes)),
  children: element
}
