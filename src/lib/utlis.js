export function GETNENV(name) {
    return import.meta.env["VITE_" + name];
}
