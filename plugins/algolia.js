// plugins/algolia.js
import algoliasearch from 'algoliasearch/lite';

export default ({ app }, inject) => {
const searchClient = algoliasearch('4DXOCL4B1G', '8f1045bac94d2d94a6c6f72308449440');
inject('algolia', searchClient);
};