import React, { Fragment,useState,useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import LatestProducts from '../AllProductData/LatestProductData/LatestProductData'
import LatestProductCard from '../ReuseAbleComponent/Card/LatestProductCard';
import FeatureProductSkeletonAnimation from '../ReuseAbleComponent/SkeletonComponent/FeatureProductSkeletonAnimation';

export default function LatestProduct () {
   const [ spinner, setSpinner ] = useState(true);
      
   useEffect(() => {
     setTimeout(() => setSpinner(false), 1000)
   }, [])

   const data = LatestProducts.map(item=>{
      return (
         <LatestProductCard 
            productImg={item.productImg}
            product_title={item.product_title}
            price={item.price}
            key={item.id}
      />
      )
   })
        return (
            <Fragment>
                <Container className="mb-5">
                    <h2 className="f-product-title">Latest Products</h2>
                    <div className="underline"></div>
                    <Row>
                       {
                          spinner ?
                          <Row>
                              <FeatureProductSkeletonAnimation />
                              <FeatureProductSkeletonAnimation />
                              <FeatureProductSkeletonAnimation />
                              <FeatureProductSkeletonAnimation />
                              <FeatureProductSkeletonAnimation />
                              <FeatureProductSkeletonAnimation />
                              <FeatureProductSkeletonAnimation />
                              <FeatureProductSkeletonAnimation />
                          </Row>

                          :

                          <Row>
                              {data}
                          </Row>
                       }
                    </Row>
                </Container>
            </Fragment>
        )
    }

