export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_953EFF8D25041C78'

export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51IPAtzEIdzBCxIMCN8B9MlyNn5GtxcS7U2q3OeBRamjerjlBGKbrXnEDVdLjeyPYaw4SAwRYfXYJnpNYMOtCZ4Dw00X30c2yXM'

/**
 * Given an image return the Url
 * Works for local and deployed strapis
 * @param image
 */
export const fromImageToUrl = (image) => {
    if (!image){
        return "/vercel.svg"
    }
    if (image.url.indexOf("/") === 0){
        return `${API_URL}${image.url}`
    }
    return image.url
}