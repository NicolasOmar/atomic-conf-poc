import { arrayOf, bool, shape } from 'prop-types'
import Column from '../../molecules/Column'

const ColumnGrid = ({
  isVerticalCenter = false,
  isMultiline = false,
  columns = null
}) => {
  return columns && Array.isArray(columns) && columns.length > 0 ? (
    <section className="columns">
      {columns.map((config, i) => (
        <Column key={`column-${i}`} {...config} />
      ))}
    </section>
  ) : null
}

export default ColumnGrid

ColumnGrid.propTypes = {
  isVerticalCenter: bool,
  isMultiline: bool,
  columns: arrayOf(shape(Column.propTypes))
}
