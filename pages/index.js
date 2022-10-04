import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'PrivacyLayout'

export async function getStaticProps() {
  const privacyDetails = await getFileBySlug('privacy', ['page'])
  return { props: { privacyDetails } }
}
export default function Home({ privacyDetails }) {
  const { mdxSource, frontMatter } = privacyDetails
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
    </>
  )
}
