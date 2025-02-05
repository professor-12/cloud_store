import { GETNENV } from "./utlis";

export const BASE_URL =
    import.meta.env == "production"
        ? GETNENV("SERVER_URL")
        : "http://localhost:8000/";
