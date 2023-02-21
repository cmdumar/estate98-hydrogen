/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */

import React from 'react'
import { StorySection } from '../../components/index';
import { Layout } from '../../components/index.server';

function Story() {
let blurBg = false;


  return (
   <Layout bg="bg-[url(https://cdn.shopify.com/s/files/1/0712/2793/2978/files/Esencia-bg-min.jpg?v=1675160778)]" > 
      <StorySection/>
  </Layout>
  )
}

export default Story;