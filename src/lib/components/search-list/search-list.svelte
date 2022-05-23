<script>
    import { users } from '../../../../data/users.js';
    import Item from '../user-item/user-item.svelte';
    import { hoverUser } from '../store.js';

    function handleHoverUser(event) {
        hoverUser.update((i) => (i = event.detail.user));
    }

    export let search;

    $: serchChars = search.length >= 3 ? search.toLowerCase() : '';

    $: filteredList = users.filter(
        (item) =>
            (
                item.first_name.toLowerCase() +
                item.last_name.toLowerCase() +
                item.email_address.toLowerCase() +
                item.id.toLowerCase()
            ).indexOf(serchChars) !== -1,
    );
    $: groups = filteredList.reduce((curr, user) => {
        let group = curr.find((g) => g.relationship === `${user.relationship}`);
        if (group) {
            group.items.push(user);
        } else {
            curr.push({ relationship: `${user.relationship}`, items: [user] });
        }
        return curr;
    }, []);
</script>


<div>
    {#each groups as group}
        <div class="mt-5 w-1/2 ...">{group.relationship} ({group.items.length})</div>
        {#each group.items as item}
            <div>
                <Item {item} on:hoverUser={handleHoverUser} />
            </div>
        {:else}
            <div>No users!</div>
        {/each}
    {/each}
</div>

