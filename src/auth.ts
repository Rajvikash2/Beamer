import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/sveltekit/providers/github";
import { GITHUB_SECRET,GITHUB_CLIENT_ID } from "$env/static/private";

export const{handle} = SvelteKitAuth({
    providers:[
        GitHub({clientId: GITHUB_CLIENT_ID, clientSecret:GITHUB_SECRET})
    ]
})