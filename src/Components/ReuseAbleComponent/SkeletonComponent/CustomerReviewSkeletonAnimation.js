import { Col } from 'react-bootstrap'
import Skeleton from '@material-ui/lab/Skeleton';


export default function CustomerReviewSkeletonAnimation() {
    return (
        <Col lg={12} md={12} sm={12} className="p-2 m-2 test-mar-top">
            <div className="testimonial test-margin">
                <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}}/>
                <Skeleton animation="wave" variant="text" style={{width:'50%', height:'3vh'}}/>
                <span className="rating-star">
                   <Skeleton animation="wave" variant="text" style={{width:'30%', height:'3vh'}}/>
                </span>
                <div>
                    <Skeleton variant="circle" style={{width:'40%', height:'20vh'}} />
                    <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                </div>
            </div>
        </Col>
    )
}
