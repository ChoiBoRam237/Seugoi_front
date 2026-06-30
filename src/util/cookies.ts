import Cookies from "js-cookie";

const COOKIE_EXPIRES_DAYS = 3; // 72시간

export const cookie = {
    setCookie: (name: string, value: any) => {
        Cookies.set(name, JSON.stringify(value), {
            expires: COOKIE_EXPIRES_DAYS,
            path: "/",
            sameSite: "strict",
        });
    },

    getCookie: (name: string) => {
        const value = Cookies.get(name);
        return value ? JSON.parse(value) : null;
    },

    removeCookie: (name: string) => {
        Cookies.remove(name, {
            path: "/",
        });
    },

    clearCookie: () => {
        Cookies.remove("token");
        Cookies.remove("user");
    }
};