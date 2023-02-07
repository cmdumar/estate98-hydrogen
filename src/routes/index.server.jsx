/* eslint-disable prettier/prettier */
import {Suspense} from 'react';
import {
  CacheLong,
  gql,
  Seo,
  ShopifyAnalyticsConstants,
  useServerAnalytics,
  useLocalization,
  useShopQuery,
} from '@shopify/hydrogen';

import {MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';
import {getHeroPlaceholder} from '~/lib/placeholders';
import {FeaturedCollections, Hero, Esencia, Process } from '~/components';
import {Layout} from '~/components/index.server';

export default function Homepage() {
  useServerAnalytics({
    shopify: {
      canonicalPath: '/',
      pageType: ShopifyAnalyticsConstants.pageType.home,
    },
  });

  return (
    <Layout>
      <Suspense>
        <SeoForHomepage />
      </Suspense>
      <Suspense>
        <HomepageContent />
      </Suspense>
    </Layout>
  );
}

function HomepageContent() {
  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();

  const {data} = useShopQuery({
    query: HOMEPAGE_CONTENT_QUERY,
    variables: {
      language: languageCode,
      country: countryCode,
    },
    preload: true,
  });

  const {heroBanners, featuredCollections} = data;

  // fill in the hero banners with placeholders if they're missing
  const [primaryHero, secondaryHero, tertiaryHero] = getHeroPlaceholder(
    heroBanners.nodes,
  );

  return (
    <>
      {primaryHero && (
        <Hero {...primaryHero} height="full" top loading="eager" />
      )}
      <Esencia />
      <Hero {...primaryHero} pickedByHand height="full" top loading="eager" />
      <Process {...primaryHero} height="full" loading="eager" />

      {/* <ProductSwimlane
        data={featuredProducts.nodes}
        title="Featured Products"
        divider="bottom"
      /> */}
      
      
      {secondaryHero && <Hero {...secondaryHero} />}
      <FeaturedCollections
        data={featuredCollections.nodes}
        title="Collections"
      />
      {tertiaryHero && <Hero {...tertiaryHero} />}
    </>
  );
}

function SeoForHomepage() {
  const {
    data: {
      shop: {name, description},
    },
  } = useShopQuery({
    query: HOMEPAGE_SEO_QUERY,
    cache: CacheLong(),
    preload: true,
  });

  return (
    <Seo
      type="homepage"
      data={{
        title: name,
        description,
        titleTemplate: '%s · Powered by Hydrogen',
      }}
    />
  );
}

/**
 * The homepage content query includes a request for custom metafields inside the alias
 * `heroBanners`. The template loads placeholder content if these metafields don't
 * exist. Define the following five custom metafields on your Shopify store to override placeholders:
 * - hero.title             Single line text
 * - hero.byline            Single line text
 * - hero.cta               Single line text
 * - hero.spread            File
 * - hero.spread_secondary  File
 *
 * @see https://help.shopify.com/manual/metafields/metafield-definitions/creating-custom-metafield-definitions
 * @see https://github.com/Shopify/hydrogen/discussions/1790
 */

const HOMEPAGE_CONTENT_QUERY = gql`
  ${MEDIA_FRAGMENT}
  ${PRODUCT_CARD_FRAGMENT}
  query homepage($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    heroBanners: collections(
      first: 3
      query: "collection_type:custom"
      sortKey: UPDATED_AT
    ) {
      nodes {
        id
        handle
        title
        descriptionHtml
        heading: metafield(namespace: "hero", key: "title") {
          value
        }
        byline: metafield(namespace: "hero", key: "byline") {
          value
        }
        cta: metafield(namespace: "hero", key: "cta") {
          value
        }
        spread: metafield(namespace: "hero", key: "spread") {
          reference {
            ...Media
          }
        }
        bottle: metafield(namespace: "hero", key: "bottle") {
          reference {
            ...Media
          }
        }
        process1: metafield(namespace: "hero", key: "process1") {
          reference {
            ...Media
          }
        }
        pickBg: metafield(namespace: "hero", key: "pickbg") {
          reference {
            ...Media
          }
        }
        stamp: metafield(namespace: "hero", key: "stamp") {
          reference {
            ...Media
          }
        }
        coffeleaves: metafield(namespace: "hero", key: "coffeleaves") {
          reference {
            ...Media
          }
        }
        coffeebeverage: metafield(namespace: "hero", key: "coffeebeverage") {
          reference {
            ...Media
          }
        }
        video1: metafield(namespace: "process", key: "video1") {
          reference {
            ...Media
          }
        }
        # process2: metafield(namespace: "process", key: "process2") {
        #   reference {
        #     ...Media
        #   }
        # } 
        # process3: metafield(namespace: "process", key: "process3") {
        #   reference {
        #     ...Media
        #   }
        # } 
        # process4: metafield(namespace: "process", key: "process4") {
        #   reference {
        #     ...Media
        #   }
        # } 
        # process5: metafield(namespace: "process", key: "process5") {
        #   reference {
        #     ...Media
        #   }
        # } 
        # process6: metafield(namespace: "process", key: "process6") {
        #   reference {
        #     ...Media
        #   }
        # } 
        # process7: metafield(namespace: "process", key: "process7") {
        #   reference {
        #     ...Media
        #   }
        # } 
        # process8: metafield(namespace: "process", key: "process8") {
        #   reference {
        #     ...Media
        #   }
        # } 
        spreadSecondary: metafield(namespace: "hero", key: "spread_secondary") {
          reference {
            ...Media
          }
        }
      }
    }
    featuredCollections: collections(
      first: 3
      query: "collection_type:smart"
      sortKey: UPDATED_AT
    ) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
    featuredProducts: products(first: 12) {
      nodes {
        ...ProductCard
      }
    }
  }
`;

const HOMEPAGE_SEO_QUERY = gql`
  query shopInfo {
    shop {
      name
      description
    }
  }
`;
