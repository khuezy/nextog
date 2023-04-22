
import { ImageResponse, NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams?.get('title') || ''

  // const fontData = await font
  return new ImageResponse(
    <div tw='flex w-screen h-screen  text-lg' style={{ backgroundColor: '#86efac' }}>
      <div tw='flex flex-col text-center ml-10 text-4xl text-sky-600'>
        <h1>OG</h1>
        <div>{title}</div>
      </div>
    </div>,
    {
      width: 800,
      height: 400
    }
  )
}