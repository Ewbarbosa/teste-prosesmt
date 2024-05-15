"use client"

import styles from "./page.module.scss";

import Header from "@/components/Header/page";
import Section1 from "@/components/Section1/page";
import Section2 from "@/components/Section2/page";
import Section3 from "@/components/Section3/page";

import Link from "next/link";

export default function Home() {

  return (
    <div className={styles.container}>

      <Header />
      
      <Link href={'/form'}>
        <button className={styles.button}>
          Preencher Formulário
        </button>
      </Link>


      <Section1 />

      <Section2 />

      <Section3 />

    </div>
  );
};
