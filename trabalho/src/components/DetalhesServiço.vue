<template>
    <div id="serviço">
            <h1>Vehicle Details</h1>
            <p>Vehicle ID: {{ vehicleId }}</p>
            <!-- Other vehicle details -->
    </div>
</template>
  
<script>
    export default {
        name: "DetalhesServiço",
        props: ['vehicleId'], // Define the vehicleId prop
        // Other component options
    };
</script>

<style scoped>

</style>