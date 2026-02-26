export const STORAGE_KEY = "dl-waitlist";
export const BASE_COUNT = 847;

export function getWaitlistCount() {
  try {
    const data = window.localStorage?.getItem?.(STORAGE_KEY);
    return data ? JSON.parse(data).length : 0;
  } catch { return 0; }
}

export function addToWaitlist(email) {
  try {
    const data = window.localStorage?.getItem?.(STORAGE_KEY);
    const list = data ? JSON.parse(data) : [];
    list.push({ email, timestamp: Date.now() });
    window.localStorage?.setItem?.(STORAGE_KEY, JSON.stringify(list));
    return list.length;
  } catch { return 1; }
}
