<script>
  import App from "./fb";
  import {onMount} from 'svelte';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  import { goto } from '$app/navigation';
  import { isLoggedIn } from "./stores/authStore";
  import Navbar from '$lib/components/layout/navbar.svelte';
  import Header from '$lib/components/layout/header.svelte';

  onMount (() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if(user) {
        console.log('A user is logged in');
        isLoggedIn.update(() => true);
      } else {
        isLoggedIn.update(() => false);
        goto('/login');
      }
    })
  })
</script>

<Navbar />
<Header text="XP Tracker" />

<slot />

<style>
  :global(body) {
    font-family: "Open Sans", sans-serif;
    width: 75%;
    margin: 0 auto;
    background-color: #29294B;
    border: 1px solid black;
    color: rgb(125,125,175);
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    :global(body) {
      width: 100%;
    }
  }
</style>