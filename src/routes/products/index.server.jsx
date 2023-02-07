import {Suspense} from 'react';
import {gql, Seo} from '@shopify/hydrogen';

import {PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';
import {PAGINATION_SIZE} from '~/lib/const';
import {Section, SectionOne} from '~/components';
import {Layout} from '~/components/index.server';

export default function AllProducts() {
  return (
    <Layout bg="bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Esencia-bg-min.jpg?v=1675160778)]">
      <Seo type="page" data={{title: 'All Products'}} />
      <Section>
        <Suspense>
          <SectionOne />
        </Suspense>
      </Section>
    </Layout>
  );
}

// function AllProductsGrid() {
//   const {
//     language: {isoCode: languageCode},
//     country: {isoCode: countryCode},
//   } = useLocalization();

//   const {data} = useShopQuery({
//     query: ALL_PRODUCTS_QUERY,
//     variables: {
//       country: countryCode,
//       language: languageCode,
//       pageBy: PAGINATION_SIZE,
//     },
//     preload: true,
//   });

//   const products = data.products;

//   return (
//     <ProductGrid
//       key="products"
//       url={`/products?country=${countryCode}`}
//       collection={{products}}
//     />
//   );
// }

// API to paginate products
// @see templates/demo-store/src/components/product/ProductGrid.client.tsx
export async function api(request, {params, queryShop}) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', {
      status: 405,
      headers: {Allow: 'POST'},
    });
  }

  const url = new URL(request.url);
  const cursor = url.searchParams.get('cursor');
  const country = url.searchParams.get('country');
  const {handle} = params;

  return await queryShop({
    query: PAGINATE_ALL_PRODUCTS_QUERY,
    variables: {
      handle,
      cursor,
      pageBy: PAGINATION_SIZE,
      country,
    },
  });
}

const ALL_PRODUCTS_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query AllProducts(
    $country: CountryCode
    $language: LanguageCode
    $pageBy: Int!
    $cursor: String
  ) @inContext(country: $country, language: $language) {
    products(first: $pageBy, after: $cursor) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`;

const PAGINATE_ALL_PRODUCTS_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query ProductsPage(
    $pageBy: Int!
    $cursor: String
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    products(first: $pageBy, after: $cursor) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
