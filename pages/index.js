import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import {fromImageToUrl, API_URL} from "../utils/urls";
import {twoDecimals} from "../utils/format";

export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="stylesheet" href="../public/favicon.ico"/>
      </Head>

        {products.map(product => (
            <div key={product.name} className={styles.product}>
                <Link href={`/product/${product.slug}`}>
                    <a>
                        <div className={styles.product__Row}>
                            <div className={styles.product__ColImg}>
                                <img src={fromImageToUrl(product.image)} />
                            </div>
                            <div className={styles.product_Col}>
                                {product.name} ${twoDecimals(product.price)}
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        ))}
    </div>
  )
}

export async function getStaticProps() {
    //Fetch the products
    const product_res = await fetch(`${API_URL}/products/`)
    const products = await product_res.json()

    //Fetch the products as props
    return {
        props: {
            products
        }
    }
}