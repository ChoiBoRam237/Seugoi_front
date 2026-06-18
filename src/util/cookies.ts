import Cookies from "js-cookie";

const COOKIE_EXPIRES_DAYS = 3; // 72시간

export const cookie = {
    setCookie: (name: string, value: any) => {
        Cookies.set(name, value, {
            expires: COOKIE_EXPIRES_DAYS,
            path: "/",
            sameSite: "strict",
        });
    },

    getCookie: (name: string) => {
        return JSON.parse(Cookies.get(name));
    },

    removeCookie: (name: string) => {
        Cookies.remove(name, {
            path: "/",
        });
    },
};