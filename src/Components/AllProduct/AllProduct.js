import React, { Fragment,useState,useEffect } from 'react'
import { Container,Row,Col,Form } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import ProductDta from '../AllProductData/ProductData/ProductData'
import ProductCard from '../ReuseAbleComponent/Card/ProductCard';
import FeatureProductSkeletonAnimation from '../ReuseAbleComponent/SkeletonComponent/FeatureProductSkeletonAnimation';

const useStyles = makeStyles((theme) => ({
   root: {
     '& > *': {
       marginTop: theme.spacing(2),
     },
   },
 }));


export default function AllProduct() {
   const classes = useStyles();
   const [ spinner, setSpinner ] = useState(true);
      
   useEffect(() => {
     setTimeout(() => setSpinner(false), 1000)
   }, [])

   const data = ProductDta.map(item=>{
      return (
         <ProductCard 
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
                    <h2 className="product-title">All Products</h2>
                    <Row className="mt-3">
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
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
                             <FeatureProductSkeletonAnimation />
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
                    <div className={classes.root} style={{marginTop:'5%',background:'pink',paddingTop:'10px',paddingBottom:'20px'}}>
                        <Pagination count={10} showFirstButton  showLastButton  variant="outlined" size="large" color="secondary" />
                    </div>
                </Container>
            </Fragment>
        )
    
}
