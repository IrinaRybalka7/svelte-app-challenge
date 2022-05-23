<script lang="ts">
  import TailwindCss from './TailwindCSS.svelte';
  import Search from './lib/Search.svelte';

</script>
<TailwindCss />
<main>
  <main class="max-w mx-auto px-4">
    <div class="pt-4 pb-12 search-content ...">
      <Search />
      </div>
    </main>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
  .search-content {
      width: 100%;
      margin: auto;
    }
  @media (min-width: 1124px) {
    .search-content {
      width: 70%;
      
    }
  }
</style>
