import type { Metadata } from 'next'

type Props = {
  params: {
    title: string
  }
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const url = process.env.NEXT_PUBLIC_URL
  return {
    title: 'Title',
    applicationName: 'App',
    description: 'Bug',
    keywords: ['Bug'],
    icons: {
      icon: '/thirteen.svg'
    },
    openGraph: {
      type: 'website',
      url,
      title: 'Title',
      description: 'Description',
      siteName: 'Bug',
      images: [{
        url: `/api/og?title=${params.title ?? 'hi'}`,
        width: 800,
        height: 600,
      }],
    }
  }
}

export default function OG() {
  return (
    <div>Testing Open Graph</div>
  )
}