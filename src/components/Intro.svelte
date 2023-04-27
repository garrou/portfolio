<script>
  export let firstname;
  export let lastname;
  export let picture;
  export let title;
  export let sentences;
</script>

<main>
  <img class="picture" src={picture} alt="profil" />
  <h1>{firstname} {lastname}</h1>
  <p class="subtitle">{title}</p>

  <div class="sentences">
    {#each sentences as sentence}
      <p class="sentence">{sentence}</p>
    {/each}
  </div>

  <div class="networks">
    <a href="https://github.com/garrou">
      <img class="icons" src="icons/github.svg" alt="Github logo" />
    </a>
    <a href="https://fr.linkedin.com/in/adrien-garrouste-7b747117b">
      <img class="icons" src="icons/linkedin.svg" alt="Linkedin logo" />
    </a>
  </div>
</main>

<style>
  h1 {
    text-transform: uppercase;
    letter-spacing: 6px;
    font-size: 48px;
  }

  .picture {
    border-radius: 50%;
    width: 200;
    height: 200px;
  }

  .subtitle {
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 4px;
    text-transform: uppercase;
  }

  .sentences {
    margin-top: 3%;
  }

  .networks {
    margin: 2%;
  }

  .networks a {
    margin: 0 2% 0 2%;
  }

  .icons {
    height: 50px;
    width: 50px;
  }
</style>
