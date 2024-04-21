<template>
    <div id="serviço">
        <div class="circular-imagecombustao">
            <img src="../images/imagempostocombustao.jpg" alt="Imagem Posto Combustivel">
        </div>
        <div class="servicos">
            <strong>Serviços</strong>
        </div>
        <div class="logout">
            <router-link to="/">
                    <button><strong>Logout</strong></button>
            </router-link>
        </div>
        <div>
            <h2>List of Service Definitions</h2>
            <ul>
                <li v-for="service in services" :key="service.id">
                    <b>ID:</b> {{ service.id }}<br>
                    <b>Vehicle ID:</b> {{ service.vehicleId }}<br>
                    <b>Service Definition ID:</b> {{ service['service-definitionId'] }}<br>
                    <b>Status:</b> {{ service.estado }}<br>
                    <b>Scheduled:</b> {{ service.agendamento }}<br>
                    <b>Description:</b> {{ service.descrição }}<br>
                    <b>Scheduled Date:</b> {{ formattedDate(service.data) }}<br>
                </li>
            </ul>
        </div> 
    </div> 
</template>


<script>
import axios from 'axios';
export default {
    name:"Serviço",
    data() {
        return {
            services: []
        };
    },
    mounted() {
        this.fetchServices();
    },
    methods: {
        fetchServices() {
            axios.get('http://localhost:3000/services')
                .then(response => {
                    this.services = response.data;
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('An error occurred. Please try again later.');
                });
        },
        formattedDate(dateObj) {
            if (!dateObj) return '';
            const { dia, mes, ano, hora, minutos } = dateObj;
            return `${dia}/${mes}/${ano} ${hora}:${minutos}`;
        }   
    }
};
</script>


<style scoped>
    .circular-imagecombustao {
        width: 200px;
        height: 200px;
        margin-left: 0px;
        margin-top: 0px;
        border-radius: 50%; /* Makes the image circular */
        overflow: hidden; /* Hides the parts of the image outside the circle */
        z-index: 2;
    }

    .circular-imagecombustao img {
        width: 100%;    
        height: 100%;
        object-fit: cover; /* Maintains aspect ratio and covers the container */
    }

    .servicos {
        display: flex;
        font-size: 5rem;
        color: black;
        transform: translate( 200%, 6%);
    }

    .logout button{
        width: 200px;
        height: 100px;
        margin-left: 1050px;
        margin-top: 50px;
        font-size: 50px;
        background-color: skyblue;
        border: transparent;
        color: black;
    }
</style>