<script>
	import { page } from '$app/state';
</script>

<section class="error">
  <h2>{page.error.message}</h2>

  <p>Une erreur s'est produite.</p>

  <a href="/">Retour à l'accueil</a>
</section>

<style>
  .error {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
</style>