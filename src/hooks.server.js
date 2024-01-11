import { SvelteKitAuth } from "@auth/sveltekit"
import Spotify from "@auth/core/providers/spotify"
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, AUTH_SECRET } from "$env/static/private"

export const handle = SvelteKitAuth({
        providers: [Spotify({
        clientId: SPOTIFY_CLIENT_ID,
        clientSecret: SPOTIFY_CLIENT_SECRET,
        scope: "user-read-email user-read-private user-read-playback-state playlist-modify-public playlist-modify-private",
        redirectUri: "http://localhost:5173/auth/callback/spotify"
    })],
    secret: AUTH_SECRET
});
