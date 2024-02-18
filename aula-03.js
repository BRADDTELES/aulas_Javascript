const idade = 28
const nome = 'Maria'
let podeEntrar = false

if (idade == '28' || nome === 'MariaAdmin') {
    console.log('ENTROU')
    podeEntrar = true
} else {
    console.log('NÃO ENTRA!!!')
}

console.log('usuário pode entrar',podeEntrar)