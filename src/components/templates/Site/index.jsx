import { bool, any, func, shape } from 'prop-types'
// COMPONENTES
import ButtonGroup from '../../molecules/ButtonGroup'
import Title from '../../atoms/Title'
import CardList from '../../organisms/CardList'
import ColumnGrid from '../../organisms/ColumnGrid'
// CONSTANTES
import bulmaStyles from '../../../constants/bulma-styles.json'
// MOCKS
import dummyData from './dummyData.json'

const { columnSizes, columnOffsets } = bulmaStyles

const Site = ({
  useDummyData = false,
  siteConfig = null,
  cards = [],
  onClick = null
}) => {
  const columnConfig = useDummyData ? dummyData : siteConfig ?? dummyData
  const gridConfig = {
    isMultiline: true,
    isHorizontalCenter: true,
    columns: [
      {
        size: columnConfig.title.size,
        offset: columnConfig.title.offset,
        children: <Title {...columnConfig.title.props} />
      },
      {
        size: columnConfig.buttonGroup.size,
        offset: columnConfig.buttonGroup.offset,
        children: (
          <ButtonGroup
            {...{
              ...columnConfig.buttonGroup.props,
              onClick
            }}
          />
        )
      },
      {
        size: columnConfig.cardList.size,
        offset: columnConfig.cardList.offset,
        children: (
          <CardList
            {...{
              ...columnConfig.cardList.props,
              cards: cards.length > 0 ? cards : null
            }}
          />
        )
      }
    ]
  }

  return <ColumnGrid {...gridConfig} />
}

export default Site

Site.propTypes = {
  useDummyData: bool,
  siteConfig: shape({
    title: {
      size: Object.keys(columnSizes),
      offset: Object.keys(columnOffsets),
      children: shape(Title.propTypes)
    },
    buttonGroup: {
      size: Object.keys(columnSizes),
      offset: Object.keys(columnOffsets),
      children: shape(ButtonGroup.propTypes)
    },
    cardList: {
      size: Object.keys(columnSizes),
      offset: Object.keys(columnOffsets),
      children: shape(CardList.propTypes)
    }
  }).isRequired,
  cards: any,
  onClick: func
}
