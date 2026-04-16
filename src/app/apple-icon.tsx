import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 36,
          background: 'linear-gradient(135deg, #533afd 0%, #2e2b8c 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: 110,
            fontWeight: 300,
            color: '#ffffff',
            lineHeight: 1,
            marginTop: -4,
          }}
        >
          S
        </div>
      </div>
    ),
    { ...size },
  );
}
