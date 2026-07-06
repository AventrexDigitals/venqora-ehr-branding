/** Shared Aventrex API config — blog + pricing (Node build + browser fetch). */

export const VENQORA_PRODUCT_SLUG = 'venqora-ehr';

export function getApiBase() {
  const fromPublic =
    typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_AVENTREX_API_URL : '';
  const fromServer =
    typeof process !== 'undefined' ? process.env.AVENTREX_API_URL : '';
  return (fromPublic || fromServer || '').replace(/\/$/, '');
}

export function getProductSlug() {
  const fromPublic =
    typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_AVENTREX_PRODUCT_SLUG : '';
  const fromServer =
    typeof process !== 'undefined' ? process.env.AVENTREX_PRODUCT_SLUG : '';
  return fromPublic || fromServer || VENQORA_PRODUCT_SLUG;
}

export function usesBlogApi() {
  return Boolean(getApiBase());
}

export function resolveBlogImageUrl(image, apiBase = getApiBase()) {
  if (!image || typeof image !== 'string') return null;
  const trimmed = image.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;
  if (trimmed.startsWith('//')) return `https:${trimmed}`;
  if (apiBase && trimmed.startsWith('/')) return `${apiBase.replace(/\/$/, '')}${trimmed}`;
  return trimmed;
}
