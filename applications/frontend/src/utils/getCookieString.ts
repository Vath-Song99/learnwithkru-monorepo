import { IAuth } from "@/@types/auth";
import { cookies } from "next/headers";
// get cookie string
export const getCookieString = (): string | IAuth => {
  const cookiesStore = cookies();

  const _ga = cookiesStore.get("_ga")?.value;
  const persistent = cookiesStore.get("persistent")?.value;
  const session = cookiesStore.get("session")?.value;
  const sessionSig = cookiesStore.get("session.sig")?.value;

  if (!persistent && !session && !sessionSig) {
    return { isAuth: false, data: null };
  } else if (persistent || (session && sessionSig)) {
    return `_ga=${_ga};persistent=${persistent};session=${session};session.sig=${sessionSig}`;
  }
  
  return { isAuth: false ,data: null };

  // return new Promise((resolve) =>{
  //   if (!persistent && !session && !sessionSig) {
  //      setTimeout(() =>{
  //       resolve( { isAuth: false, data: null });
  //      }, 1000)
  //   } else if (persistent || (session && sessionSig)) {
  //     setTimeout(() =>{
  //       resolve( `_ga=${_ga};persistent=${persistent};session=${session};session.sig=${sessionSig}`);
  //      }, 1000)
  //   }
  //   setTimeout(() =>{
  //     resolve( { isAuth: false, data: null });
  //    }, 1000)
  // },)
};
