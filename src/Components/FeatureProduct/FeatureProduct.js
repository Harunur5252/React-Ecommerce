import React, { Fragment,useState,useEffect } from 'react'
import { Row,Container } from 'react-bootstrap'
import FeatureProducts from '../AllProductData/FeatureProductData/FeatureProductData'
import FeatureProductCard from '../ReuseAbleComponent/Card/FeatureProductCard';
import FeatureProductSkeletonAnimation from '../ReuseAbleComponent/SkeletonComponent/FeatureProductSkeletonAnimation';

export default function FeatureProduct () {
   const [ spinner, setSpinner ] = useState(true);
      
   useEffect(() => {
     setTimeout(() => setSpinner(false), 1000)
   }, [])


   const data = FeatureProducts.map(item=>{
      return (
         <FeatureProductCard 
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
                    <h2 className="f-product-title">Feature Products</h2>
                    <div className="underline"></div>
                    <Row>
                       {
                          spinner ?
                          <Row>
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
