import { bool } from 'prop-types'
import Title from '../../atoms/Title'
import ButtonGroup from '../../molecules/ButtonGroup'
import CardList from '../../organisms/CardList'
import ColumnGrid from '../../organisms/ColumnGrid'
import dummyData from './dummyData.json'

const Site = ({ useDummyData = false }) => {
  const siteStructure = [<Title />, <ButtonGroup />, <CardList />]

  const siteConfig = {
    isMultiline: true,
    isHorizontalCenter: true,
    columns: dummyData.map(({ size, offset, props }, i) =>
      siteStructure[i]
        ? {
            size,
            offset,
            children: {
              ...siteStructure[i],
              props
            }
          }
        : null
    )
  }
  return useDummyData ? <ColumnGrid {...siteConfig} /> : null
}

export default Site

Site.propTypes = {
  useDummyData: bool
}
