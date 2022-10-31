import CardList from '.'
import ROUTES from '../../../constants/routes.json'

export default {
  title: `${ROUTES.STORYBOOK.ORGANISMS}/CardList`,
  component: CardList
}

const Template = args => <CardList {...args} />

export const Example = Template.bind({})
Example.storyName = 'Ejemplo'
Example.args = {
  cards: Array.from({ length: 5 }, () => ({
    header: <p>Lorem ipsum</p>,
    image: { src: 'https://bulma.io/images/placeholders/1280x960.png' },
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
        eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
        pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
        vel, aliquet nec, vulputate
      </p>
    ),
    footer: [{ text: 'Test 1' }, { text: 'Test 2' }, { text: 'Test 3' }]
  }))
}
