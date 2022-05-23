<script>
  import { GOLD, SILVER, PLATIN } from '../constants/membershipColors.js';
  import { ACTIVE } from '../constants/activeUser.js';
  import { hoverUser } from './store.js';
  
  let user;
  const unsubscribe = hoverUser.subscribe(value => {
    user = value;
	});
  

</script>

<style>
  .user-details-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .user-details-photo {
    width: 56px;
    position: absolute;
  }
  .user-details_title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
  }

  .user-details_avatar_membership_cicle {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    display: inline-block;
    margin-left: 14px;
    margin-top: -1px;
  }

  .user-details_avatar_active_cicle {
    position: relative;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    display: inline-block;
    z-index: 100;
    top: 45px;
    left: -16px;
    background-color: #13CCCC;
  }
  
  .user-details-inactive {
    position: relative;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    display: inline-block;
    z-index: 100;
    top: 45px;
    left: -16px;
    background-color: red;
  }

  .user-details-table-contents {
    border-top: 1px solid lightgrey;
  }

  .e-mail_color {
    color: #13CCCC;
  }
</style>

<div class="user-details-content ... ">
  <div class="w-3/4 m-auto ...">
    <div class="flex justify-center mt-8 pb-3 ...">
      <div class=" { user.membership === GOLD ? 'bg-yellow-400' : user.membership === SILVER ? 'bg-gray-400' : user.membership === PLATIN ? 'bg-purple-400' : 'bg-white-300' } user-details_avatar_membership_cicle"></div>
      <img class=" m-px rounded-full user-details-photo" src="./../../static/medium/{user.avatar}" alt="{user.avatar} ">
      <div class=" { user.active === ACTIVE ? 'user-details_avatar_active_cicle' : 'user-details-inactive'}"></div>
    </div>
    <div class="pb-3 ..."><strong>{user.first_name + ' ' + user.last_name }</strong></div>
    <div class="pb-3 ..." >{user.id}</div>
    <div class="table w-full user-details-table-contents pt-2 ... ">
      <div class="pb-3 table-row  ...">
        <div class="text-left table-cell pr-4 pb-3 ..."><strong>Membership</strong></div> 
        <div class="text-left table-cell ..."><strong>{ user.membership }</strong></div>
      </div>
      <div class="pb-3 table-row ...">
        <div class="text-left table-cell pr-4 pb-3  ..."><strong>Phone</strong></div> 
        <div class="text-left table-cell  ...">{ user.phone }</div>
      </div>
      <div class="pb-3 table-row ...">
        <div class=" text-left table-cell pr-4 pb-3 ..."><strong>Email</strong></div> 
        <div class="text-left table-cell e-mail_color ...">{ user.email_address }</div>
      </div>
    </div>
    <div class="flex justify-around user-details_title ...">
      <button>
        <img class="m-4 rounded-full ..." src="./../../static/icons/chat.jpg" alt="chat">
      </button>
      <button>
        <img class="m-4 rounded-full ..." src="./../../static/icons/phone.jpg" alt="phone">
      </button>
      <button>
        <img class="m-4 rounded-full" src="./../../static/icons/location.jpg" alt="location">
      </button>
    </div>
  </div>

</div>
