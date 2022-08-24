import SecureLS from "secure-ls";

const ls = new SecureLS();

export const cacheData = (key: string, dataToCache: any): void => {
  if (!dataToCache) return;
  ls.set(key, dataToCache);
};

export const getCachedData = (key: string): any => {
  try {
    const data = ls.get(key);
    return data;
  } catch (err) {
    return null;
  }
};

export const deleteCachedData = (key: string): void => {
  ls.remove(key);
};
