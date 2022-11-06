import { bool, any, func, shape, object } from 'prop-types'
// COMPONENTES
import ButtonGroup from '../../molecules/ButtonGroup'
import Title from '../../atoms/Title'
import ProgressBar from '../../atoms/ProgressBar'
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
  isLoading = false,
  onClick = null
}) => {
  const columnConfig = useDummyData ? dummyData : siteConfig
  const usedCards = useDummyData ? dummyData?.cardList?.props?.cards || [] : cards
  const gridConfig = {
    isMultiline: true,
    isHorizontalCenter: true,
    columns: columnConfig
      ? [
          {
            size: columnConfig.title.size,
            offset: columnConfig.title.offset,
            styles: columnConfig.title.styles,
            children: <Title {...columnConfig.title.props} />
          },
          {
            size: columnConfig.buttonGroup.size,
            offset: columnConfig.buttonGroup.offset,
            styles: columnConfig.buttonGroup.styles,
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
            styles: columnConfig.cardList.styles,
            children: isLoading ? (
              <ProgressBar isInLoop={true} color={'primary'} />
            ) : (
              <CardList
                {...{
                  ...columnConfig.cardList.props,
                  cards: usedCards.length > 0 ? usedCards : null
                }}
              />
            )
          }
        ]
      : []
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
      styles: object,
      children: shape(Title.propTypes)
    },
    buttonGroup: {
      size: Object.keys(columnSizes),
      offset: Object.keys(columnOffsets),
      styles: object,
      children: shape(ButtonGroup.propTypes)
    },
    cardList: {
      size: Object.keys(columnSizes),
      offset: Object.keys(columnOffsets),
      styles: object,
      children: shape(CardList.propTypes)
    }
  }),
  cards: any,
  isLoading: bool,
  onClick: func
}
