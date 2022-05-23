<script>
    import { Search } from 'carbon-components-svelte';
    import SearchList from '../search-list/search-list.svelte';
    import UserDetails from '../user-details/user-details.svelte';
    import 'carbon-components-svelte/css/white.css';
    import { hoverUser } from '../store.js';

    let user;
    let search = '';
    const unsubscribe = hoverUser.subscribe((value) => {
        user = value;
    });
</script>

<div>
    <Search placeholder="Text" bind:value={search} />
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
        <div class="search-details w-1/2 ..." />
    {/if}
</div>

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
