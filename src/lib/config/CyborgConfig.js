const cyborgConfig = {
  objectUrl: '/assets/cyborg.glb',
  nodeCoords: 'cyborg.geometry.attributes.position',
  nodeSigns: [1, 1, -1],
  nodeScale: 0.12,
  nodeGroupScale: 0.4,
  meshColorIndex: 'ciano',
  meshScale: 4,
  debug: false,
  model: {
    material: 'Material_0',
    scale: 1,
    metalness: 0.2,
    roughness: 2,
    opacity: 1,
    color: 'white'
  },
  gridPosition: [0, 0, 0],
  cameraPosition: [0, -2.2, 3.8],
  targetPosition: [0, 1, 0],
  pointColorIndex: {
    primary: 'ciano',
    hovered: 'magenta',
    active: 'magenta'
  },
  pointLight: {
    position: [0, 0, 0],
    intensity: [50, 50, 50],
    distance: 10,
    color: ['red', 'red', 'white']
  },
  bloom: {
    kernelSize: 1,
    luminanceThreshold: 0.1,
    luminanceSmoothing: 0.05,
    intensity: 0.1
  },
  glitch: {
    delay: [20, 30],
    duration: [0.3, 0.5],
    strength: [0.1, 0.3]
  },
  lights: {
    front: {
      color: 'ciano'
    },
    left: {
      color: 'white'
    },
    right: {
      color: 'magenta'
    }
  }
}

export { cyborgConfig }
