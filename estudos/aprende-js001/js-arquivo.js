function crieCartao(){
    let mensagem = "Dados enviado com sucesso"
    let imputEmpresa = document.getElementById("empresa")
    let imputNome = document.getElementById("nome")
    let imputNumero = document.getElementById("telefone")

    let minhaEmpresa = imputEmpresa.value
    let minhaNome = imputNome.value
    let minhaNumero = imputNumero.value
    document.getElementById(mensagem).textContent = mensagem;

    


}