export function getLocalStorage(name: string) {
  const item = localStorage.getItem(name);
  return item ? JSON.parse(item) : null;
}

export function setLocalStorage(name: string, data: any) {
  localStorage.setItem(name, JSON.stringify(data));
}
