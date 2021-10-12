import React, { Fragment,useState,useEffect } from 'react'
import { Container,Row,Col,Form } from 'react-bootstrap'
import BigPostData from '../AllProductData/BigPostData/BigPostData'
import BigPostCard from '../ReuseAbleComponent/Card/BigPostCard';
import BigPostProductSkeletonAnimation from '../ReuseAbleComponent/SkeletonComponent/BigPostProductSkeletonAnimation';

export default function BigPost () {
   const [ spinner, setSpinner ] = useState(true);
      
   useEffect(() => {
     setTimeout(() => setSpinner(false), 1000)
   }, [])

   
   const data = BigPostData.map(item=>{
      return (
         <BigPostCard 
            productImg={item.productImg}
            product_title={item.product_title}
            price={item.price}
            cutPrice={item.cutPrice}
            key={item.id}
      />
      )
   })



        return (
            <Fragment>
                <Container className="mb-5">
                    <h2 className="f-product-title">BigPost Products</h2>
                    <div className="underline"></div>
                    <Row className="mt-5">
                       <Col lg={4} md={6} sm={12}>
                          <select className="form-control select-sort">
                              <option value="">Default Sorting</option>
                              <option value="">Short By Price</option>
                              <option value="">Short By Popularity</option>
                              <option value="">Short By Rating Star</option>
                              <option value="">Short By Sale</option>
                           </select>
                       </Col>

                       <Col lg={4} md={6} sm={12}>
                           <Form.Control type="text" placeholder="Search_Product" />
                       </Col>
                    </Row>
                    <Row>
                       {
                          spinner ?

                          <Row>
                              <BigPostProductSkeletonAnimation />
                              <BigPostProductSkeletonAnimation />
                              <BigPostProductSkeletonAnimation />
                              <BigPostProductSkeletonAnimation />
                              <BigPostProductSkeletonAnimation />
                              <BigPostProductSkeletonAnimation />
                              <BigPostProductSkeletonAnimation />
                              <BigPostProductSkeletonAnimation />
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
