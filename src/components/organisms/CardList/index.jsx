import { arrayOf, shape } from 'prop-types'
import Card from '../../molecules/Card'
import bulmaStyles from '../../../constants/bulma-styles.json'
import { oneOf } from 'prop-types'
import Column from '../../molecules/Column'

const { columnSizes } = bulmaStyles

const CardList = ({ cardSize = '1', cards = null }) =>
  cards && Array.isArray(cards) && cards.length > 0 ? (
    <section className="columns is-multiline">
      {cards.map((config, i) => (
        <Column key={`card-column-item-${i}`} size={cardSize}>
          <Card key={`card-item-${i}`} {...config} />
        </Column>
      ))}
    </section>
  ) : null

export default CardList

CardList.propTypes = {
  cardSize: oneOf(Object.keys(columnSizes)),
  cards: arrayOf(shape(Card.propTypes))
}
