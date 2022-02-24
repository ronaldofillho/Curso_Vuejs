new Vue({
    el: "#desafio",
    data:{
        Nome: "Begão", Idade: 30, imagem: "http://files.cod3r.com.br/curso-vue/vue.jpg" 
    },
    methods:{
        multiplicador(){
            return this.Idade * 3
        },
        random(){
            return Math.random()  
        },
        alterarInput(event){
            this.Nome=event.target.value
        }
    }
})