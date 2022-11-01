import Title from '../../atoms/Title'
import ButtonGroup from '../../molecules/ButtonGroup'
import CardList from '../../organisms/CardList'
import ColumnGrid from '../../organisms/ColumnGrid'
import dummyData from './dummyData.json'

const Site = () => {
  const siteStructure = [<Title />, <ButtonGroup />, <CardList />]

  const siteConfig = {
    isMultiline: true,
    columns: dummyData.map(({ size, props }, i) =>
      siteStructure[i]
        ? {
            size,
            children: {
              ...siteStructure[i],
              props
            }
          }
        : null
    )
  }
  return <ColumnGrid {...siteConfig} />
}

export default Site

Site.propTypes = {}
