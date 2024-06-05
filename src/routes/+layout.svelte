<script>
  import "../app.css";
</script>

<div class="flex flex-col h-screen">
 
  
  <div class="flex flex-grow overflow-hidden">
    <aside class="sticky top-0 bg-black text-white w-64 p-4 flex flex-col h-screen">
      <!-- Sidebar content goes here -->
      <div class="flex flex-col items-center mt-8">
        <h1 class="tracking-widest text-5xl text-pink-700 mb-12">Beam</h1>
        <ul class="w-full">
          <li class="flex items-center py-4 hover:bg-gray-800 w-full px-4 rounded">
            <span class="mr-4 svg-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home svg-icon"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </span>
            <span class="text-xl font-semibold"><a href="/home"> Home</a></span>
          </li>
          <li class="flex items-center py-4 hover:bg-gray-800 w-full px-4 rounded">
            <span class="mr-4 svg-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-plus svg-icon"><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><line x1="16" x2="22" y1="5" y2="5"/><line x1="19" x2="19" y1="2" y2="8"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            </span>
            <span class="text-xl font-semibold"> <a href="/post">Post</a></span>
          </li>
          <li class="flex items-center py-4 hover:bg-gray-800 w-full px-4 rounded">
            <span class="mr-4 svg-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users svg-icon"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </span>
            <span class="text-xl font-semibold">Friends</span>
          </li>
          <li class="flex items-center py-4 hover:bg-gray-800 w-full px-4 rounded">
            <span class="mr-4 svg-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users svg-icon"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </span>
            <span class="text-xl font-semibold"><a href="/">Logout</a></span>
          </li>
        </ul>
      </div>
    </aside>
    
    <main class="flex-grow p-4 overflow-auto">
      <slot />
    </main>
  </div>
</div>

<style>
  .hover\:bg-gray-800:hover {
    background-color: #333;
  }

  .svg-container:hover .svg-icon {
    transform: scale(1.25);
  }

  .svg-icon {
    transition: transform 0.3s ease;
  }
</style>