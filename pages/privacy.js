import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'PrivacyLayout'

export async function getStaticProps() {
  const privacyDetails = await getFileBySlug('privacy', ['page'])
  return { props: { privacyDetails } }
}

export default function Privacy({ privacyDetails }) {
  const { mdxSource, frontMatter } = privacyDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
