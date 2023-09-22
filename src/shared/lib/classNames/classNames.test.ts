import { classNames } from './classNames'

describe('classNames', () => {
  test('single class', () => {
    expect(classNames('test')).toBe('test')
  })
  test('multi class', () => {
    expect(classNames('class1', {}, ['class2', 'class3'])).toBe('class1 class2 class3')
  })
  test('multi class with additional all TRUE params', () => {
    expect(classNames('class1', { hovered: true, scrollable: true }, ['class2', 'class3']))
      .toBe('class1 class2 class3 hovered scrollable')
  })
  test('multi class with additional TRUE and FALSE params', () => {
    expect(classNames('cl1', { hoverable: true, scrollable: false }, ['cl2', 'cl3']))
      .toBe('cl1 cl2 cl3 hoverable')
  })
  test('multi class with additional TRUE and FALSE params', () => {
    expect(classNames('cl1', { hoverable: true, scrollable: undefined }, ['cl2', 'cl3']))
      .toBe('cl1 cl2 cl3 hoverable')
  })
})
