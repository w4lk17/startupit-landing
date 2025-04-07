import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Dynamic params
    const title = searchParams.get('title');
    const category = searchParams.get('category');
    const author = searchParams.get('author');

    if (!title) {
      return new Response('Missing title parameter', { status: 400 });
    }

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: 'white',
            backgroundImage: 'linear-gradient(to bottom right, #f0f9ff, #ffffff)',
          }}
        >
          <div
            style={{
              marginLeft: 80,
              marginRight: 80,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}
          >
            {category && (
              <div
                style={{
                  backgroundColor: '#0ea5e9',
                  borderRadius: 16,
                  color: 'white',
                  fontSize: 24,
                  padding: '8px 24px',
                  marginBottom: 32,
                }}
              >
                {category}
              </div>
            )}
            <div
              style={{
                fontSize: 64,
                fontWeight: 'bold',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: 32,
                color: '#0f172a',
              }}
            >
              {title}
            </div>
            {author && (
              <div
                style={{
                  fontSize: 32,
                  color: '#64748b',
                }}
              >
                Par {author}
              </div>
            )}
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 80,
              left: 80,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div
              style={{
                fontSize: 32,
                fontWeight: 'bold',
                color: '#0f172a',
              }}
            >
              StartupIT
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    console.log(`${e instanceof Error ? e.message : 'Unknown error occurred'}`);
    return new Response('Failed to generate the image', {
      status: 500,
    });
  }
}
