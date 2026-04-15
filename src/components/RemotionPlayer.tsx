'use client';

import { Player } from '@remotion/player';
import { HeroBackground } from './HeroBackground';

export default function RemotionPlayer() {
  return (
    <Player
      component={HeroBackground}
      durationInFrames={300}
      compositionWidth={1920}
      compositionHeight={1080}
      fps={30}
      loop
      autoPlay
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
      acknowledgeRemotionLicense
      renderLoading={() => null}
    />
  );
}
