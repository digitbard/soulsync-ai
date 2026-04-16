import { ImageResponse } from 'next/og';

export const alt = 'SoulSync AI — AI Implementation Partner';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #061b31 0%, #1c1e54 50%, #2e2b8c 100%)',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 4,
              padding: '6px 14px',
              fontSize: 14,
              color: '#b9b9f9',
              fontWeight: 400,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#15be53',
              }}
            />
            AI Implementation Partner
          </div>

          <div
            style={{
              fontSize: 64,
              fontWeight: 300,
              color: '#ffffff',
              letterSpacing: '-1.4px',
              lineHeight: 1.1,
              textAlign: 'center',
            }}
          >
            SoulSync AI
          </div>

          <div
            style={{
              fontSize: 22,
              fontWeight: 300,
              color: 'rgba(255,255,255,0.6)',
              textAlign: 'center',
              maxWidth: 600,
              lineHeight: 1.5,
            }}
          >
            Practical AI solutions for businesses across Asia-Pacific
          </div>

          <div
            style={{
              display: 'flex',
              gap: 16,
              marginTop: 8,
              fontSize: 14,
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            <span>Hong Kong</span>
            <span>·</span>
            <span>Japan</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
