const mensagem1 = 'Danillo Teles'
const mensagem2 = 'Carneiro'

console.log('tamanho: ', mensagem1.length)
console.log('Concat: ', mensagem1.concat(mensagem2))
console.log('Concat + ', "Exiba: " + " " + mensagem1 + " " + mensagem2)
console.log('ES: ',  `Exiba: ${mensagem1} ${mensagem2}`)
console.log('Quebrar em array: ', mensagem1.split( ' '))

console.log('UP: ', mensagem1.toUpperCase())
console.log('DOWN: ', mensagem1.toLowerCase())