function crieCartao(){
    //mensagem após clicar no botão
    let mensagem = "Dados enviado com sucesso"
    //busca no html o dado inserido em "empresa"
    let imputEmpresa = document.getElementById
    ("empresa")
    //busca no html o dado inserido em "nome"
    let imputNome = document.getElementById("nome")
    //busca no html o dado inserido em "telefone"
    let imputNumero = document.getElementById("telefone")
    
    let minhaEmpresa = imputEmpresa.value
    let minhaNome = imputNome.value
    let minhaNumero = imputNumero.value

    //aqui escreve a "mensagem" no id=mensagemP
    document.getElementById("mensagemP").textContent = mensagem
    document.getElementById("cardEmpresa").textContent = minhaEmpresa
    document.getElementById("cardNome").textContent = minhaNome
    document.getElementById("cardNumero").textContent = minhaNumero
    

    empresa.value = ""
    nome.value = ""
    telefone.value = ""
    

    
}