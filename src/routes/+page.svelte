<script lang="ts">
	import { SignOut } from '@auth/sveltekit/components';
    import { page } from '$app/stores';
    import { signIn, signOut } from "@auth/sveltekit/client"
  import { onMount } from 'svelte';
    console.log($page.data.session)
   export let user = $page.data.session?.user;
   const saveUserToDatabase = async (user:any) => {
        if (user) {
            try {
                const response = await fetch('/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({username: user.name})
                });

                if (response.ok) {
                    console.log('User saved successfully');
                } else {
                    console.error('Error saving user:', await response.text());
                }
            } catch (error) {
                console.error('Network error:', error);
            }
        }
    };

    onMount(() => {
        if (user) {
            saveUserToDatabase(user);
        }
    });
</script>

<div class="p-24 text-center bg-gray-100 min-h-screen flex flex-col justify-center items-center">
    {#if $page.data.session}
        <h1 class="text-2xl font-semibold text-gray-800 mb-4">You are logged in as</h1>
        {#if $page.data.session.user?.image}
            <img src={$page.data.session.user.image} alt="profile image" class="rounded-full w-24 h-24 mx-auto mb-4"/>
            <h1 class="text-xl font-bold text-gray-700">{user?.name}</h1>
        {/if}
        <button 
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 transition duration-300 ease-in-out transform hover:scale-105" 
            on:click={() => signOut()}
        >
            Sign Out
        </button>
    {:else}
        <h1 class="text-4xl font-bold text-gray-800 mb-6">You are not logged in</h1>
        <button 
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105" 
            on:click={() => signIn("github")}
        >
            Sign in with GITHUB
        </button>
    {/if}
</div>

<style>
    .text-center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .rounded-full {
        border-radius: 9999px;
    }
    .transition {
        transition: all 0.3s ease-in-out;
    }
    .hover\:scale-105:hover {
        transform: scale(1.05);
    }
</style>
