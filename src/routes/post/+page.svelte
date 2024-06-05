<script>
    let user_id=0;
    let title = '';
    let image_url = '';
    let body = '';
    let message='';
 const handleSubmit = async ()=>{
    message = '';
    const response = await fetch('/post/newPost',{
        method:'POST',
        body:JSON.stringify({
            user_id,
            title,
            image_url,
            body       

        })
    })
    const data = await response.json();
    message = data.message
    console.log(data);
    if (response.ok) {
            alert("Posted"); // Display an alert message if the post was successful
        } else {
            alert("Failed to post"); // Display an alert message if the post failed
        }
 }
</script>

<div class="flex flex-col h-screen justify-center items-center">
    <div class="bg-white p-6 rounded-lg shadow-md">
        <h1 class="text-2xl text-black font-semibold mb-6">Create a post</h1>
        <form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-5">
            <div>
                <label for="title" class="block font-semibold text-gray-800">User_id</label>
                <input
                    class="w-full md:w-96 px-3 py-2 border border-yellow-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    type="number"
                    id="title"
                    bind:value={user_id}
                />
            </div>
            <div>
                <label for="title" class="block font-semibold text-gray-800">Title</label>
                <input
                    class="w-full md:w-96 px-3 py-2 border border-yellow-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    type="text"
                    id="title"
                    bind:value={title}
                />
            </div>
            <div>
                <label for="imageUrl" class="block font-semibold text-gray-800">Image URL</label>
                <input
                    class="w-full md:w-96 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    type="text"
                    id="imageUrl"
                    bind:value={image_url}
                />
            </div>
            <div>
                <label for="description" class="block font-semibold text-gray-800">Description</label>
                <textarea
                    class="w-full md:w-96 px-3 py-2 font-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    id="description"
                    bind:value={body}
                ></textarea>
            </div>
            <button
                class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                type="submit"
            >
                Submit
            </button>
            {#if message}
                 <p class=" text-red-600">{message}</p>
            {/if}
        </form>
    </div>
</div>
