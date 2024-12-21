import { Auth0Client } from '@auth0/auth0-spa-js';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();

  const auth0 = new Auth0Client({
    domain: config.public.auth0.domain,
    client_id: config.public.auth0.clientId,
    redirect_uri: window.location.origin,
    cacheLocation: 'localstorage'
  });

  // Handle the redirect callback
  if (window.location.search.includes('code=')) {
    try {
      await auth0.handleRedirectCallback();
      window.history.replaceState({}, document.title, window.location.pathname);
    } catch (error) {
      console.error('Error handling redirect callback:', error);
    }
  }

  return {
    provide: {
      auth0
    }
  };
});