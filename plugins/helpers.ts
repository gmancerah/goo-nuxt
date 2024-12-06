// plugins/helpers.ts
export default defineNuxtPlugin(() => {
  return {
    provide: {
      toSlug: (text: string) => {
        return text
          ?.toLowerCase()
          .trim()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '')
          || '';
      }
    }
  }
})