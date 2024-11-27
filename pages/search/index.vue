<script setup>
import { ref, computed, onMounted } from 'vue';
import { useNuxtApp } from '#app'; // Importa useNuxtApp para acceder a los inyectores

const props = defineProps({
title: {
  type: String,
  default: 'Featured Items'
},
apiUrl: {
  type: String,
  required: true
},
browseLinkText: {
  type: String,
  default: 'items'
}
});

const { $algolia } = useNuxtApp(); // Accede al cliente de Algolia
const destinationsData = ref(null);
const pending = ref(true);
const error = ref(null);

// Debugging log
// console.log('API URL:', props.apiUrl);

const fetchDestinations = async () => {
try {
  pending.value = true;
  error.value = null;

  const response = await fetch(props.apiUrl);
  // console.log('Response status:', response.status);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  destinationsData.value = data;
} catch (e) {
  error.value = e;
} finally {
  pending.value = false;
}
};

// Call fetch on mount
onMounted(() => {
fetchDestinations();
});

// Algolia search function
const searchItems = async (query) => {
const index = $algolia.initIndex('goouniversity'); // Asegúrate de usar el nombre correcto de tu índice
const { hits } = await index.search(query);
return hits;
};

// Lógica adicional y funciones de contenido...

</script>