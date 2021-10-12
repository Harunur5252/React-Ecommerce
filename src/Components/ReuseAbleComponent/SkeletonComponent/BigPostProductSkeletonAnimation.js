import { Col } from 'react-bootstrap'
import Skeleton from '@material-ui/lab/Skeleton';

export default function BigPostProductSkeletonAnimation (props){
    return (
        <Col lg={3} md={6} sm={12}>
            <div className="product mt-5">
                <Skeleton variant="rect" animation="wave" className="wave rounded" style={{height:'45vh'}} />
                <Skeleton animation="wave" variant="text" style={{width:'80%', height:'5vh'}}/>
                <span className="rating-star">
                    <Skeleton animation="wave" variant="text" style={{width:'40%', height:'3vh'}}/>
                </span>
                <Skeleton animation="wave" variant="text" style={{width:'18%', height:'2vh'}}/>
                <Skeleton animation="wave" variant="text" style={{width:'24%', height:'2vh'}}/>
            </div>
       </Col>
    )
}

