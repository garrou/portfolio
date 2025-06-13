<script>
  export let firstname;
  export let lastname;
  export let title;
  export let sentences;
  export let networks;
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
    {#each networks as network}
    <a href="{ network.url }">
      <img class="icons" src="icons/{ network.name.toLowerCase() }.svg" alt="{ network.name } logo" />
    </a>
    {/each}
  </div>
</main>

<style>
  h1 {
    text-transform: uppercase;
    letter-spacing: 6px;
    font-size: 40px;
  }

  a {
    text-decoration: none;
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
