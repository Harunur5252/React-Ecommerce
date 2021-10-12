import React, { Fragment,useState,useEffect } from 'react'
import { Row,Col, Container,Form } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import SubCategoryWomenSareeData from '../../../AllProductData/SubCategoryWomenSareeData/SubCategoryWomenSareeData'
import SubCategoryWomenSareeCard from '../../../ReuseAbleComponent/Card/SubCategoryWomenSareeCard'
import FeatureProductSkeletonAnimation from '../../../ReuseAbleComponent/SkeletonComponent/FeatureProductSkeletonAnimation'

const useStyles = makeStyles((theme) => ({
   root: {
     '& > *': {
       marginTop: theme.spacing(2),
     },
   },
 }));

export default function Saree() {
       const classes = useStyles();
       const date = new Date();
       const year = date.getFullYear()

       const [ spinner, setSpinner ] = useState(true);
      
       useEffect(() => {
         setTimeout(() => setSpinner(false), 1000)
       }, [])

       const data = SubCategoryWomenSareeData.map(item=>{
         return (
            <SubCategoryWomenSareeCard 
               productImg={item.productImg}
               product_title={item.product_title}
               price={item.price}
               key={item.id}
         />
         )
      })

        return (
            <Fragment>
                 <Container className="mt-5 mb-5">
                    <h2 className="f-product-title">Bangladeshi Saree Collection {year}</h2>
                    <div className="underline"></div>
                    <h2 className="product-title">All Saree</h2>

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
                           <Form.Control type="text" placeholder="Search_Saree" />
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
