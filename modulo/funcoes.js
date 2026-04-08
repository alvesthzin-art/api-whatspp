const { contatos } = require("./contatos")

const listaContatos = function (listaCompleta) {
    let dadosEncontrados = []

    listaCompleta.forEach(function(item) {
        if (item.account) {

            const contatosFormatados = item.contacts.map(function(contato) {
                return {
                    nome: contato.name,
                    descricao: contato.description,
                    imagem: contato.image,
                    mensagens: contato.messages.map(function(msg) {
                        return {
                            remetente: msg.sender,
                            conteudo: msg.content,
                            hora: msg.time
                        }
                    })
                }
            })

            dadosEncontrados.push({
                nome: item.account,
                nickname: item.nickname,
                data_de_inicio: item["created-since"].start,
                data_de_encerramento: item["created-since"].end,
                foto: item["profile-image"],
                numero: item.number,
                cor_de_fundo: item["background"],
                contatos: contatosFormatados
            })
        }
    })

    return dadosEncontrados

}

const dadosUsuario = function(listaCompleta) {
    let dadosEncontrados = []

    listaCompleta.forEach(function(item) {
        if(item.account) {

            dadosEncontrados.push ({
                nome: item.account,
                nickname: item.nickname,
                foto: item["profile-image"],
                numero: item.number,
                cor_de_fundo: item["background"],
                data_de_inicio: item["created-since"].start,
                data_de_encerramento: item["created-since"].end
                
            })
        }
    })

    return dadosEncontrados

}
// Tenho que tirar depois
// const resultado = listaContatos(contatos["whats-users"])
// console.dir(resultado, { depth: null })

// const dadosTeste = dadosUsuario(contatos["whats-users"])
// console.log(dadosTeste)

const dadosContato = function(listaCompleta) {
    let dadosEncontrados = []

    listaCompleta.forEach(function(item) {
        if(item.account) {
            const contatosFormatados = item.contacts.map(function(contato) {
                return {
                    nome: contato.name,
                    descricao: contato.description,
                    imagem: contato.image,
                    
                }
            })

            dadosEncontrados.push ({
                usuario: item.account,
                contatos:contatosFormatados
            })
        }
    })

    return dadosEncontrados
    
}

// const resultado = dadosContato(contatos["whats-users"])
// console.dir(resultado, { depth: null })

const mensagensUsuario = function(listaCompleta) {
    let dadosEncontrados = []

    listaCompleta.forEach(function(item) {
        if(item.account) {

            const mensagensFormatadas = item.contacts.map(function(contato) {
                return {
                    mensagens: contato.messages.map(function(msg) {
                        return {
                            remetente: msg.sender,
                            conteudo: msg.content,
                            hora: msg.time
                        }
                    })
                }
            })

            dadosEncontrados.push ({
                usuario: item.account,
                contatos: mensagensFormatadas
            })
        }
    })

    return dadosEncontrados
}

// const resultado = mensagensUsuario(contatos["whats-users"])
// console.dir(resultado, { depth: null })


const conversaUsuario = function(listaCompleta) {
    
}
