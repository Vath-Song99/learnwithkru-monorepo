import { cookies } from "next/headers";


// get cookie string
export const getCookieString = () => {
  const cookiesStore = cookies();
  const _ga = cookiesStore.get("_ga")?.value;
  const persistent = cookiesStore.get("persistent")?.value;
  const session = cookiesStore.get("session")?.value;
  const sessionSig = cookiesStore.get("session.sig")?.value;
  if (!persistent && !session && !sessionSig) {
    return { isAuth: false, data: null };
  } else if (persistent || session && sessionSig) {
    return `_ga=${_ga};persistent=${persistent};session=${session};session.sig=${sessionSig}`;
  }
  return;
};
