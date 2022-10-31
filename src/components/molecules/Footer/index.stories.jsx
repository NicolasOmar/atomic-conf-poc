import Footer from '.'
import ROUTES from '../../../constants/routes.json'

export default {
  title: `${ROUTES.STORYBOOK.MOLECULES}/Footer`,
  component: Footer
}

const Template = args => <Footer {...args} />

export const Example = Template.bind({})
Example.storyName = 'Ejemplo'
Example.args = {
  children: (
    <>
      <strong>WebConf 2022 | Diseño Atómico</strong> por{' '}
      <a href="https://github.com/NicolasOmar">Nicolás Omar González Passerino</a>. El
      código fuente tiene licencia
      <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
    </>
  )
}
