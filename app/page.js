'use client'

import { useEffect } from 'react'
import styles from './page.module.scss'
import { initWebGL } from '../lib/webglSetup'


export default function Home() {
  useEffect(() => {
    const canvas = document.querySelector('.webgl')
    initWebGL(canvas)
  }, [])

  return (
    <div className={styles.container}>
      <h1>Welcome to Our Game Intro Site</h1>
      asdg
      <canvas className="webgl"></canvas>
      {/* <canvas className={styles.webgl}></canvas> */}
    </div>
  )
}