
<script>
  import { Search } from "carbon-components-svelte";
  import SearchList from './SearchList.svelte';
  import UserDetails from './UserDetails.svelte';
  import "carbon-components-svelte/css/white.css";
  import { hoverUser } from './store.js';

  let user;
  let userList;
  let search = '';
  const unsubscribe = hoverUser.subscribe(value => {
		user = value;
	});

</script>

<style>
  .search-content {
    height: 350px;
    
  }
  .search-list {
    overflow: scroll;
    border: 1px solid lightgrey;
  }
  .search-details {
    border: 1px solid lightgrey;
  }
</style>
<div>
  <Search 
    on:clear={() => console.log("clear")}
    placeholder='Text'
    bind:value={search}
    />
</div>

<div class="flex justify-between search-content ...">
  <div class="search-list w-1/2 ...">
    <SearchList {search} />
  </div>
  {#if user.id}
    <div class="search-details w-1/2 ...">
      <UserDetails />
    </div>
  {:else}
    <div class="search-details w-1/2 ..."></div>
  {/if}
</div>


