import React from 'react'
import { shallow } from 'enzyme'
import App, { SYMBOLS } from './App'
import Card from './Components/Card/Card'
import GuessCount from './Components/GuessCount/GuessCount'

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
  })

  it('should match its reference snapshot', () => {
    const mock = jest
      .spyOn(App.prototype, 'generateCards')
      .mockImplementation(() => [...SYMBOLS.repeat(2)])
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('<GuessCount />', () => {
  it('contains a zero-guess counter', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.contains(<GuessCount guesses={0} />)).toBeTruthy()
  })

  it('has 36 cards', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Card').length).toBe(36)
  })
})

describe('<Card/>', () => {
  it('should trigger its `onClick` prop when clicked', () => {
    const onClick = jest.fn()
    const wrapper = shallow(
      <Card card="😁" feedback="hidden" index={0} onClick={onClick} />
    )

    wrapper.simulate('click')
    expect(onClick).toHaveBeenCalledWith(0)
  })

  it('should match its reference snapshot', () => {
    const onClick = jest.fn()
    const wrapper = shallow(
      <Card card="😁" feedback="hidden" index={0} onClick={onClick} />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
