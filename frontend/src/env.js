const viteEnv = typeof import.meta !== "undefined" ? import.meta.env : {};
const processEnv = typeof process !== "undefined" ? process.env : {};

export function readEnv(...keys) {
    for (const key of keys) {
        const value = viteEnv[key] ?? processEnv[key];
        if (typeof value !== "undefined" && value !== null && String(value).trim() !== "") {
            return String(value);
        }
    }
    return undefined;
}
