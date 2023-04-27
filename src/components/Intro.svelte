<script>
  export let firstname;
  export let lastname;
  export let title;
  export let sentences;
</script>

<main>
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
    font-size: 40px;
  }

  .subtitle {
    font-size: 20px;
    letter-spacing: 4px;
    text-transform: uppercase;
  }

  .sentences {
    margin-top: 3%;
  }

  .sentences p {
    text-justify: auto;
  }

  .networks {
    margin: 2%;
  }

  .networks a {
    margin: 0 2% 0 2%;
  }

  .icons {
    height: 5%;
    width: 5%;
  }
</style>
