import { oneOf } from 'prop-types'
import { bool, number } from 'prop-types'
import bulmaStyles from '../../../constants/bulma-styles.json'

const { colors, commonSizes } = bulmaStyles

const ProgressBar = ({
  value = null,
  isInLoop = false,
  color = 'primary',
  size = 'default'
}) => {
  const progressBarStyles = `progress ${colors[color]} ${commonSizes[size]}`
  return isInLoop ? (
    <progress className={progressBarStyles} max="100"></progress>
  ) : (
    <progress className={progressBarStyles} value={value} max="100">
      {value}%
    </progress>
  )
}

export default ProgressBar

ProgressBar.propTypes = {
  value: number,
  isInLoop: bool,
  color: oneOf(Object.keys(colors)),
  size: oneOf(Object.keys(commonSizes))
}
