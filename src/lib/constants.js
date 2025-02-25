import { GETNENV } from "./utlis";
export const BASE_URL =
    import.meta.env.MODE !== "development"
        ? GETNENV("SERVER_URL")
        : "http://localhost:8000/";

const redirect_uri =
    import.meta.env.MODE == "development"
        ? "http://localhost:5173/auth/google/callback"
                : GETNENV("redirect_uri");
        

const client_id = GETNENV("google_client_id");
export const GOOGLE_URL = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${redirect_uri}&prompt=consent&response_type=code&client_id=${client_id}&scope=openid%20email%20profile&access_type=offline`;
