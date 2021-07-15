import Head from 'next/head'
import Image from 'next/image'
import { Toolbar } from '../components/toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='page-container'>

      <Toolbar />
      <div className={styles.main}>
        <h1>Next Js Skeng Portfolio</h1>
        <h3>Your perfect dude for front end development</h3>
      </div>
    </div>
  )
}
