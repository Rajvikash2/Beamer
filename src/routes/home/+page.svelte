<script lang="ts">
  import { onMount } from 'svelte';

  let products: { 
    title: string,
    body: string,
    user_id: number,
    username:string,
    image_url: string
  }[] = [];
  let loading = true; // Initially set loading state to true

  onMount(async () => {
    const response = await fetch('home/products');
    const data = await response.json();
    products = data.results;
    loading = false; // Set loading to false after data is fetched
  });
</script>

{#if loading}
 <div class=" flex flex-col h-screen justify-center items-center"> <span class="loader "></span></div>
{:else}
  {#if products.length > 0}
    <div class="flex flex-col gap-5 items-center">
      {#each products as product}
        <div class="w-full max-w-xl border border-gray-300 rounded-lg overflow-hidden">
          <div class="flex items-center p-4">
            <div class="flex flex-col gap-8">
              <div class="flex flex-row gap-5">
                <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg" alt="User 1" class="w-16 h-16 rounded-full">
                <h1> {product.username}</h1>
              </div>
              <h1 class="ml-3 font-bold">{product.title}</h1>
            </div>
          </div>
          <img src="{product.image_url}" alt="Post Image" class="w-full h-96 object-cover">
          <div class="p-4">
            <p class="text-gray-300">{product.body}</p>
            <div class=" flex flex-row gap-10 mt-11">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff0080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart cursor-pointer hover:scale-125 transition-all"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c0c0c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <p>No posts found</p>
  {/if}
{/if}

<style>
  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 500ms linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
</style>