new Vue({
    el: '#desafio',
    data: {
        valor: 'Conteudo'
    },
    methods:{
        apertaBotao(event){
            alert("Não clique neste botão")
        },
        alterarTitulo(event){
            this.valor=event.target.value
        }
    }
})