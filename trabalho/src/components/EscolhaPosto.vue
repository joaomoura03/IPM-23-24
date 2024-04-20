<script>
    export default {
      name: "EscolhaPosto"
    }
</script>

<template>
  <div id="escolhapostoapp">
    <div class="nomeoficina">
      <h1><strong>E.S. Ideal</strong></h1>
    </div>
    <div class="postocombustao">
      <h2><strong>Posto Combustão</strong></h2>
    </div>
    <div class="postoeletrico">
      <h2><strong>Posto Elétrico</strong></h2>
    </div>
    <div class="postogeral">
      <h2><strong>Posto Geral</strong></h2>
    </div>
  </div>
  <div class="postogeral">
    <router-link to="/serviço-atribuido-geral">
      <div class="circular-imagegeral">
        <img src="../images/imagempostogeral.jpg" alt="Imagem Posto Geral">
      </div>
    </router-link>
  </div>
  <div class="postocombustao">
    <router-link to="/serviço-atribuido-combustao">
      <div class="circular-imagecombustao">
        <img src="../images/imagempostocombustao.jpg" alt="Imagem Posto Combustão">
      </div>
    </router-link>
  </div>
  <div class="postoeletrico">
    <router-link to="/serviço-atribuido-eletrico">
      <div class="circular-imageeletrico">
        <img src="../images/imagempostoeletrico.jpg" alt="Imagem Posto Eletrico">
      </div>
    </router-link>
  </div>
</template>



<style scoped>
  .circular-imagecombustao {
    width: 250px;
    height: 250px;
    border-radius: 50%; /* Makes the image circular */
    transform: translate( 0%, -100%);
    overflow: hidden; /* Hides the parts of the image outside the circle */
  }

  .circular-imagecombustao img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Maintains aspect ratio and covers the container */
  }

  .circular-imagegeral {
    width: 250px;
    height: 250px;
    border-radius: 50%; /* Makes the image circular */
    transform: translate( 85%, -100%);
    overflow: hidden; /* Hides the parts of the image outside the circle */
  }

  .circular-imagegeral img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Maintains aspect ratio and covers the container */
  }

  .circular-imageeletrico {
    width: 250px;
    height: 250px;
    border-radius: 50%; /* Makes the image circular */
    transform: translate( -35%, -100%);
    overflow: hidden; /* Hides the parts of the image outside the circle */
  }

  .circular-imageeletrico img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Maintains aspect ratio and covers the container */
  }

  .nomeoficina {
    margin-top: 5%;
    display: flex;
    font-size: 3rem;
    color: white;
  }

  .postocombustao {
    display: flex;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);  /* Center the text */
    color: white;
    font-size: 1.5rem;
    margin: auto;
    position: absolute;
  }

  .postoeletrico {
    display: flex;
    top: 80%;
    left: 50%;
    transform: translate(200%, -50%);  /* Center the text */
    color: white;
    font-size: 1.5rem;
    margin: auto;
    position: absolute;
  }

  .postogeral {
    display: flex;
    top: 80%;
    left: 50%;
    transform: translate(-350%, -50%);  /* Center the text */
    color: white;
    font-size: 1.5rem;
    margin: auto;
    position: absolute;
  }
</style>
