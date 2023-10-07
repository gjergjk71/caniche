"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/header/header'
import StartingOnlineShop from '@/components/startingOnlineShop/startingOnlineShop'
import DevelopTech from '@/components/developTech/developTech'
import CnicheFresh from '@/components/cnicheFresh/cnicheFresh'
import OpenCommunication from '@/components/openCommunication/openCommunication'
import Footer from '@/components/footer/footer'
import { useEffect } from 'react'
import * as React from "react";

export default function Home() {
  React.useEffect(() => {
    // window is accessible here.
    window.location.pathname = "/survey"
  }, []);

  return (
    <main className={styles.main}>
        <Header/>
        <StartingOnlineShop/>
        <DevelopTech/>
        <CnicheFresh/>
        <OpenCommunication/>
        <br/>
        <br/>
        <Footer/>
    </main>
  )
}
