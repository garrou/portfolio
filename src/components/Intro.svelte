<script>
    export let picture;
    export let title;
    export let intro;
</script>

<div class="mb-4 bg-light rounded-3">
    <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">
              <img src={picture} class="img-fluid picture" alt="profil">
          </div>
          <div class="col-md-8">
            <h1 class="display-5 fw-bold">{title}</h1>
            <p class="col-md-8 fs-5">{intro}</p>
            <a href="https://github.com/garrou"><i class="bi bi-github fs-2 text-dark"></i></a>
            <a href="https://fr.linkedin.com/in/adrien-garrouste-7b747117b"><i class="bi bi-linkedin fs-2 text-dark mx-1"></i></a>
            <a href="CV.pdf" target="_blank"><i class="bi bi-file-pdf fs-2 text-dark"></i></a>
          </div>
        </div>
    </div>
  </div>