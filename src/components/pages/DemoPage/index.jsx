// COMPONENTES
import Site from '../../templates/Site'
// CONFIGURACIÓN
import siteConfig from './configData.json'

const DemoPage = () => {
  return <Site useDummyData={false} siteConfig={siteConfig} />
}

export default DemoPage
