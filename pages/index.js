import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import styled from 'styled-components'
import CMP01 from '@/components/sideMenu/CMP01'
import Layout from '@/components/layouts/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout title="Home" > </Layout>
    </>
  )
}

const TitleStyle = styled.h1`
  font-family: ${inter};
  font-size: 2rem;
  color: red;
`
