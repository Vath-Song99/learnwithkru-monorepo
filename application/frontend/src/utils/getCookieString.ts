import { cookies } from "next/headers";

export const getCookieString = () => {
  const cookiesStore = cookies();
  const _ga = cookiesStore.get("_ga")?.value;
  const persistent = cookiesStore.get("persistent")?.value;
  const session = cookiesStore.get("session")?.value;
  const sessionSig = cookiesStore.get("session.sig")?.value;

  return `_ga=${_ga};persistent=${persistent};session=${session};session.sig=${sessionSig}`;
};
