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
      <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source
      code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website
      content is licensed{' '}
      <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </>
  )
}
