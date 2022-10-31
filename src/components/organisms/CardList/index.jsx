import { arrayOf, shape } from 'prop-types'
import Card from '../../molecules/Card'

const CardList = (cards = null) => {
  return cards && Array.isArray(cards) && cards.length > 0
    ? cards.map((config, i) => <Card key={`card-item-${i}`} {...config} />)
    : null
}

export default CardList

CardList.propTypes = {
  cards: arrayOf(shape(Card.propTypes))
}
