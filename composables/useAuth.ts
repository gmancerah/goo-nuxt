import { ref, computed } from 'vue';

export const useAuth = () => {
  const { $auth0 } = useNuxtApp();
  const isAuthenticated = ref(false);
  const user = ref(null);
  const isLoading = ref(true);

  const login = async () => {
    try {
      await $auth0.loginWithRedirect({
        redirect_uri: window.location.origin
      });
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = async () => {
    try {
      await $auth0.logout({
        returnTo: window.location.origin
      });
      isAuthenticated.value = false;
      user.value = null;
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const checkAuth = async () => {
    try {
      isLoading.value = true;
      isAuthenticated.value = await $auth0.isAuthenticated();
      if (isAuthenticated.value) {
        user.value = await $auth0.getUser();
      }
    } catch (error) {
      console.error('Auth check error:', error);
    } finally {
      isLoading.value = false;
    }
  };

  const getToken = async () => {
    try {
      return await $auth0.getTokenSilently();
    } catch (error) {
      console.error('Error getting token:', error);
      return null;
    }
  };

  return {
    login,
    logout,
    checkAuth,
    getToken,
    isAuthenticated: computed(() => isAuthenticated.value),
    user: computed(() => user.value),
    isLoading: computed(() => isLoading.value)
  };
};