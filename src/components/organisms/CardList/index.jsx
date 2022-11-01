import { arrayOf, shape, oneOf } from 'prop-types'
// COMPONENTES
import Card from '../../molecules/Card'
import Column from '../../molecules/Column'
// CONSTANTES
import bulmaStyles from '../../../constants/bulma-styles.json'

const { columnSizes } = bulmaStyles

const CardList = ({ cardSize = '1', cards = null }) => {
  return cards && Array.isArray(cards) && cards.length > 0 ? (
    <section className="columns is-multiline">
      {cards.map((config, i) => (
        <Column key={`card-column-item-${i}`} size={cardSize}>
          <Card key={`card-item-${i}`} {...config} />
        </Column>
      ))}
    </section>
  ) : null
}

export default CardList

CardList.propTypes = {
  cardSize: oneOf(Object.keys(columnSizes)),
  cards: arrayOf(shape(Card.propTypes))
}
