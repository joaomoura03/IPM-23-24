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
        <div class="botaotroca">
            <router-link to="/serviço-atribuido-combustao/serviço-agendada">
                    <button><strong>Espera</strong></button>
            </router-link>
        </div>
        <div class="listservices">
            <div class="horizontal-list">
                <ul>
                    <li v-for="service in services" :key="service.id">
                        <div v-if="service.agendamento === 'filaDeEspera' && service.estado === 'nafila'">
                            <b>ID:</b> {{ service.id }}<br>
                            <b>Vehicle ID:</b> {{ service.vehicleId }}<br>
                            <b>Service Definition ID:</b> {{ service['service-definitionId'] }}<br>
                            <b>Status:</b> {{ service.estado }}<br>
                            <b>Scheduled:</b> {{ service.agendamento }}<br>
                            <b>Description:</b> {{ service.descrição }}<br>
                            <button @click="getVehicle(service.vehicleId)">View Vehicle Details</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div> 
</template>


<script>
import axios from 'axios';
export default {
    name:"ServiçoEspera",
    data() {
        return {
            services: [],
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
        },
        getVehicle(vehicleId) {
            this.$router.push(`/serviço-atribuido-combustao/detalhes/${vehicleId}`);
        }
    }
};
</script>


<style scoped>

    .botaotroca button{
        width: 200px;
        height: 100px;
        margin-left: -200px;
        margin-top: 260px;
        font-size: 48px;
        background-color: skyblue;
        border: transparent;
        color: black;       
    }
    .listservices {
        display: flex;
        font-size: 1rem;
        transform: translate( -650%, 50%);
    }

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