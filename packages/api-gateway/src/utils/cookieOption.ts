import { CookieOptions } from "express";
import getConfig from "./createConfig";

const config = getConfig()
export const OptionCookie: CookieOptions = {
    maxAge: 30 *  24 * 60 * 60 * 1000, // 1 day in milliseconds
    httpOnly: true,
    secure: config.env !== 'development' && true, // set to true in production
    sameSite: config.env !== "development" ? 'strict': "none", // 'strict', 'lax', or 'none'
};
