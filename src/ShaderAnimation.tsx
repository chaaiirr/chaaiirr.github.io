import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ShaderAnimation({ dark }: { dark: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const uniformsRef = useRef<{ time: { value: number }; resolution: { value: THREE.Vector2 }; darkMode: { value: number } } | null>(null)
  const sceneRef = useRef<{ renderer: THREE.WebGLRenderer; animationId: number } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current

    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float darkMode;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time * 0.02;
        float lineWidth = 0.002;

        vec3 color = vec3(0.0);
        for (int j = 0; j < 3; j++) {
          for (int i = 0; i < 5; i++) {
            color[j] += lineWidth * float(i * i) / abs(
              fract(t - 0.01 * float(j) + float(i) * 0.01) * 5.0
              - length(uv)
              + mod(uv.x + uv.y, 0.2)
            );
          }
        }

        // Light: #F5F5F0 = vec3(0.961, 0.961, 0.941)
        // Dark:  #111110 = vec3(0.067, 0.067, 0.063)
        vec3 lightBg = vec3(0.961, 0.961, 0.941);
        vec3 darkBg  = vec3(0.067, 0.067, 0.063);
        vec3 bg = mix(lightBg, darkBg, darkMode);

        float lineStrength = mix(0.08, 0.12, darkMode);
        vec3 final = bg - color * lineStrength;
        gl_FragColor = vec4(clamp(final, 0.0, 1.0), 1.0);
      }
    `

    const camera = new THREE.Camera()
    camera.position.z = 1

    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      time: { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
      darkMode: { value: dark ? 1.0 : 0.0 },
    }
    uniformsRef.current = uniforms

    const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader })
    scene.add(new THREE.Mesh(geometry, material))

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)

    const onResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      renderer.setSize(w, h)
      uniforms.resolution.value.set(renderer.domElement.width, renderer.domElement.height)
    }
    onResize()
    window.addEventListener("resize", onResize)

    let animationId = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      uniforms.time.value += 0.02
      renderer.render(scene, camera)
      if (sceneRef.current) sceneRef.current.animationId = animationId
    }

    sceneRef.current = { renderer, animationId: 0 }
    animate()

    return () => {
      window.removeEventListener("resize", onResize)
      cancelAnimationFrame(sceneRef.current?.animationId ?? animationId)
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  // Update darkMode uniform whenever dark prop changes (no remount needed)
  useEffect(() => {
    if (uniformsRef.current) {
      uniformsRef.current.darkMode.value = dark ? 1.0 : 0.0
    }
  }, [dark])

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}
    />
  )
}
