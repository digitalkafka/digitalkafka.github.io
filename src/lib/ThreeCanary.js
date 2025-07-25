// https://github.com/jsx-eslint/eslint-plugin-react/issues/3423
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom, Glitch } from '@react-three/postprocessing'
import React, { Suspense } from 'react'
import { Lights, Particles, CameraControls, Model, Texts } from './Components'

const ThreeCanary = (props) => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  const config = props.config ? props.config : defaultConfig['canary']

  return (
    <Canvas shadows dpr={[1, 2]} performance={{ min: 0.1 }}>
      <PerspectiveCamera makeDefault position={config.cameraPosition} near={0.1} far={1000} zoom={1} />

      <Lights config={config} />

      <Suspense fallback={null}>
        <Texts />

        <Model
          scale={config.model.scale}
          objectUrl={props.objectUrl}
          meshColorIndex={config.meshColorIndex}
          meshScale={config.meshScale}
          model={config.model}
        />

        <Particles count={isMobile ? 50 : 200} />

        <EffectComposer multisampling={16}>
          <Bloom
            kernelSize={config.bloom.kernelSize}
            luminanceThreshold={config.bloom.luminanceThreshold}
            luminanceSmoothing={config.bloom.luminanceSmoothing}
            intensity={config.bloom.intensity}
          />
          <Glitch delay={config.glitch.delay} strength={config.glitch.strength} duration={config.glitch.duration} />
        </EffectComposer>
      </Suspense>

      <CameraControls config={config} />
    </Canvas>
  )
}

export { ThreeCanary }
