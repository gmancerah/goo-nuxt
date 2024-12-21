export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.client) {
      const { isAuthenticated, checkAuth } = useAuth();
      await checkAuth();
      
      if (!isAuthenticated.value && to.path !== '/login') {
        return navigateTo('/login');
      }
      
      if (isAuthenticated.value && to.path === '/login') {
        return navigateTo('/dashboard');
      }
    }
  });
  