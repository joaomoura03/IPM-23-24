

<template>
    <div id="loginapp">
        <div class="imagemoficina">
            <img src="../images/imagemoficina.jpg" alt="Imagem Oficina">
        </div>
        <div class="textologin">
            <h1><strong>Login</strong></h1>
        </div>
        <div class="back">
            <router-link to="/">
                <button><strong>Back</strong></button>
            </router-link>
        </div>
        <div class="login">
            <div class="distancia">
                <input type="text" v-model="username" placeholder="Identificador"/>
                <input type="text" v-model="password" placeholder="Password"/>
                <button v-on:click="login">Login</button>
            </div>
        </div>
        <div class="circular-imagecombustao">
            <img src="../images/imagempostocombustao.jpg" alt="Imagem Posto Combustivel">
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "LoginC",
    data(){
        return {
            username:'',
            password:''
    
        };
    },
    methods: {
        login(){ 
            axios.get('http://localhost:3000/users', {
                params: {
                    username: this.username,
                    password: this.password,
                    posto: "combustao"
                }
            })
            .then(response => {
                if (response.data.length > 0) {
                    alert('Login successful!');
                    this.$router.push('/serviço-atribuido-combustao/serviço');
                } else {
                    alert('Invalid username or password!');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            });
        }
    }
}
</script>


<style scoped>
    .imagemoficina img {
        width: 85%;
        height: 100%;
        overflow: hidden;
    }
    
    .textologin {
        display: flex;
        font-size: 3rem;
        color: black;
        margin-left: -25px;
    }
    
    .back button{
        width: 200px;
        height: 100px;
        margin-left: -450px;
        margin-top: 30px;
        font-size: 50px;
        background-color: transparent;
        border: transparent;
        z-index: 2;
        color: white;
    }


    .login input {
        width: 500px;
        height: 100px;
        display: block;
        margin-bottom: 50px;
        border: 1px solid skyblue;
        font-size: 50px;
        line-height: 100px;
        text-align: center;
    }

    .login button {
        width: 200px;
        height: 100px;
        font-size: 50px;
        margin-left: 145px;
        background-color: lightblue;
    }

    .distancia {
        margin-top: 400px;
        margin-left: 75px;
    }

    .circular-imagecombustao {
        width: 250px;
        height: 250px;
        margin-left: 285px;
        margin-top: 30px;
        border-radius: 50%; /* Makes the image circular */
        overflow: hidden; /* Hides the parts of the image outside the circle */
        z-index: 2;
    }

    .circular-imagecombustao img {
        width: 100%;    
        height: 100%;
        object-fit: cover; /* Maintains aspect ratio and covers the container */
    }
</style>