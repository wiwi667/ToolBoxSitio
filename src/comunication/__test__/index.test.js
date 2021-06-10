import { invertirTexto } from '../'

test('Debe llamar al API', async () => {
    expect.assertions(1)
    const data = await invertirTexto('qaz')
    expect(data.text).toBe('zaq')
})

test('Debe validar que sea un palindromo', async () => {
    expect.assertions(1)
    const data = await invertirTexto('qazaq')
    expect(data.palindrome).toBe(true)
})