import { NFTStorage } from 'nft.storage'
const NFT_STORAGE_KEY = process.env.REACT_APP_NFT_STORAGE_KEY
const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

const ipfsToHTTPS = (url) => {
    if (!url.startsWith("ipfs://")) throw new Error("Not an IPFS url");
    const cid = url.substring(7);
    return `https://nftstorage.link/ipfs/${cid}`;
};


const storeImage = async (image) => {
    const metadata = await nftstorage.store({
        image: image,
        name: '',
        description: '',
    })

    return metadata
}


export const imageService = {
    storeImage, ipfsToHTTPS
}