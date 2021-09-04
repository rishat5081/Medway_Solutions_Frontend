import { getCardByid, getCard, getMainPageCards } from '../../assests/cardInfo'
import styles from '../../styles/Component.module.css'
import React, { Component } from 'react';
import ImageViewer from '../../Components/imageViewer';



class ProductDetails extends Component {
    onImageClick = ({ url }) => {
        document.getElementById('titleImageId').src = '/' + url
    }
    render() {
        const data = this.props.data
        const [mainImage] = data.detailImages//data.detailImages.slice(0, 1).shift();
        return (
            <div className="w-auto p-3">

                <div className={`d-flex justify-content-center`}>
                    <h1>{data.title}</h1>
                </div>
                <div className="d-flex float-start">
                    <div className={styles.wrapper}>
                        <div className={`${styles.imageBox} ${styles.sidebar}`}>
                            <img id="titleImageId" className={styles.zoomA} src={`/` + mainImage.url} />
                        </div>
                        {/* <div className={``}>
                            Product ID : {data.cardID}
                            <br />
                            More content than we had before so this column is now quite tall.
                            <p>{data.description}</p>
                        </div> */}
                        <div className={` ${styles.ProductDetails_footer}`}>
                            {data.detailImages.map(image => <ImageViewer key={image.imageID} image={image}
                                onImageClick={this.onImageClick}
                            />)}
                        </div>
                    </div>
                </div>
                <div className={`p-2  m-4 w-75`}>
                    <h2>{data.title} Details</h2>
                    <p>
                        Lorem Product ID : 2
                        More content than we had before so this column is now quite tall.
                        Masks are used for Corona Virus Product ID : 2
                        More content than we had before so this column is now quite tall.
                        Masks are used for Corona VirusProduct ID : 2
                        More content than we had before so this column is now quite tall.
                        Masks are used for Corona VirusProduct ID : 2
                        More content than we had before so this column is now quite tall.
                        Masks are used for Corona VirusProduct ID : 2
                        More content than we had before so this column is now quite tall.
                        Masks are used for Corona Virus
                        Lorem Product ID : 2
                        More content than we had before so this column is now quite tall.
                        Masks are used for Corona Virus Product ID : 2
                        More content than we had before so this column is now quite tall.
                        Masks are used for Corona VirusProduct ID : 2
                        More content than we had before so this column is now quite tall.
                        Masks are used for Corona VirusProduct ID : 2
                        More content than we had before so this column is now quite tall.
                        Masks are used for Corona VirusProduct ID : 2
                        More content than we had before so this column is now quite tall.
                        Masks are used for Corona Virus
                        Lorem Product ID : 2
                        More content than we had before so this column is now quite tall.
                        Masks are used for Corona Virus Product ID : 2
                        More content than we had before so this column is now quite tall.
                        Masks are used for Corona VirusProduct ID : 2
                        More content than we had before so this column is now quite tall.
                        Masks are used for Corona VirusProduct ID : 2
                        More content than we had before so this column is now quite tall.
                        Masks are used for Corona VirusProduct ID : 2
                        More content than we had before so this column is now quite tall.
                        Masks are used for Corona Virus
                    </p>
                </div>


            </div>
        )
    }
}


export const getStaticProps = (context) => {
    const data = getCardByid(parseInt(context.params.id))
    return {
        props: {
            data
        }
    }

}

export const getStaticPaths = (context) => {

    const data = getCard()

    const ids = data.map(card => card.cardID)

    const paths = ids.map(id => ({ params: { id: id.toString() } }))
    return {
        paths,
        fallback: false
    }

}


// const ProductDetails = ({ data }) => {
//     const cc = () => {
//         console.log("heooooo");
//     }


//     return (
//         <>
//             <div className={styles.wrapper}>
//                 <div className={`${styles.box} ${styles.ProductDetails_header}`}>
//                     <h4>{data.title}</h4>
//                 </div>
//                 <div className={`${styles.box} ${styles.sidebar}`}>

//                     <img className={styles.zoomA} src={`/` + data.image} />
//                 </div>
//                 <div className={`${styles.box} ${styles.content}`}>
//                     Product ID : {data.cardID}
//                     <br />
//                     More content than we had before so this column is now quite tall.
//                     <p>{data.description}</p>
//                 </div>
//                 <div className={`${styles.box} ${styles.ProductDetails_footer}`}>
//                     {data.detailImages.map(image => <ImageViewer key={image.imageID} image={image}
//                     // onImageClick={this.onImageClick} 

//                     />)}
//                     <button onClick={this.cc}>Click</button>

//                 </div>
//             </div>

//         </>
//     )

// }

export default ProductDetails;











