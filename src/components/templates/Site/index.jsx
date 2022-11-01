import { bool, any } from 'prop-types'
// COMPONENTES
import ButtonGroup from '../../molecules/ButtonGroup'
import Title from '../../atoms/Title'
import CardList from '../../organisms/CardList'
import ColumnGrid from '../../organisms/ColumnGrid'
// MOCKS
import dummyData from './dummyData.json'

const Site = ({ useDummyData = false, siteConfig = null }) => {
  const siteStructure = [<Title />, <ButtonGroup />, <CardList />]
  const columnConfig = useDummyData ? dummyData : siteConfig ?? []
  const gridConfig = {
    isMultiline: true,
    isHorizontalCenter: true,
    columns: columnConfig.map(({ size, offset, props }, i) =>
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

  return <ColumnGrid {...gridConfig} />
}

export default Site

Site.propTypes = {
  useDummyData: bool,
  siteConfig: any
}
