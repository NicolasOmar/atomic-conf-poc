import Column from '.'
// CONSTANTES
import ROUTES from '../../../constants/routes.json'
import bulmaStyles from '../../../constants/bulma-styles.json'

export default {
  title: `${ROUTES.STORYBOOK.MOLECULES}/Column`,
  component: Column,
  argTypes: {
    size: {
      options: Object.keys(bulmaStyles.columnSizes)
    }
  }
}

const Template = args => <Column {...args} />

export const Example = Template.bind({})
Example.storyName = 'Ejemplo'
Example.args = {
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
      dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
      quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
      nec, vulputate
    </p>
  )
}
