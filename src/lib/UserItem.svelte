<script>
    import { GOLD, SILVER, PLATIN } from '../constants/membershipColors.js';
    import { ACTIVE } from '../constants/activeUser.js';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let item = undefined;
    export let handelHover = () => {
      dispatch('hoverUser', {
			user: item
		})
    }

</script>

<style>
  .userItem {
    margin: 0;
    padding: 8px;
  }

  .userItem:hover {
    background-color: lightgray;
  }

  .userItem:hover .arrow-right{
    display: block;
    z-index: 1000;
  }

  .avatar-membership-cicle {
    height: 31px;
    width: 31px;
    border-radius: 50%;
    display: inline-block;
  }

  .userItem-photo {
    width: 28px;
    position: absolute;
  }

  .userItem-title {
    display: flex;
    margin-left: 10px;
  }

  .userItem-name {
    display: inline-block;
    margin-right: 10px;;
  }

  .active-avatar {
    position: relative;
    height: 7px;
    width: 7px;
    border-radius: 50%;
    display: inline-block;
    z-index: 100;
    top: 22px;
    left: -7px;
    background-color: #13CCCC;
  }
  
  .inactive-avatar {
    position: relative;
    height: 7px;
    width: 7px;
    border-radius: 50%;
    display: inline-block;
    z-index: 100;
    top: 22px;
    left: -7px;
    background-color: red;
  }

  .arrow-right{
    display: none;
    right: 8px;
    position: absolute;
  }
</style>

<div class="flex my-2 items-center userItem relative" on:mouseover={handelHover} on:focus={handelHover}>
  <div class="flex userItem_avatar">
    <div class=" { item.membership === GOLD ? 'bg-yellow-400' : item.membership === SILVER ? 'bg-gray-400' : item.membership === PLATIN ? 'bg-purple-400' : 'bg-white-300' } avatar-membership-cicle"></div>
    <img class=" m-px rounded-full userItem-photo" src="./../../static/small/{item.avatar}" alt="{item.avatar} ">
    <div class=" { item.active === ACTIVE ? 'active-avatar' : 'inactive-avatar'}"></div>
  </div>
  <div class="userItem-title">
    <div class="userItem-name"><strong>{ item.first_name + ' ' + item.last_name }</strong></div>
    <div class="userItem_id">{item.id}</div>
  </div>
  <img class="arrow-right" src="./../../static/icons/arrow.svg" alt="" />
</div>
