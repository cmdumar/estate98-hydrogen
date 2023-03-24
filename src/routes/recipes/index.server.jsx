/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */
import {Layout} from '~/components/index.server';
import { RecipeSection } from '../../components/index';

function Recipes() {
  return (
    <Layout bg="bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Esencia-bg-min.jpg?v=1675160778)]">
      <RecipeSection />
    </Layout>
  );
}

export default Recipes;
