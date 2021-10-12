import { Col } from 'react-bootstrap'
import Skeleton from '@material-ui/lab/Skeleton';

export default function FeatureProductSkeletonAnimation (props){
    return (
        <Col lg={3} md={6} sm={12}>
            <div className="mt-5">
                <Skeleton variant="rect" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                <span className="rating-star">
                    <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                </span>
                <Skeleton animation="wave" variant="text" style={{width:'20%', height:'2vh'}}/>
            </div>
        </Col>
    )
}

