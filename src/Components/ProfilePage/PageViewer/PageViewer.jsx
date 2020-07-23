import React from 'react';
import { Row, Col , Image} from 'react-bootstrap';
import { FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './PageViewer.css'

const PageViewer = (data) => {
    return(
    <li className='mb-2'>
        <Row>
            <Col className='col-3'>
            {data.data.image ? <Image  src={data.data.image}  style={{width: '100%'}} alt={`${data.data.name}'s image`} roundedCircle 
            onError={(e)=>{e.target.onerror = null; e.target.src=`https://api.adorable.io/avatars/${data.data.name}`}}/>
                 :
                 <Image  src={`https://api.adorable.io/avatars/${data.data.name}`}  style={{width: '100%'}} alt="User's picture" roundedCircle />
                 }
               
            </Col>
                <Col className='col-7 d-flex'>
                    <Link className='nav-link' to={"/users/" + data.data._id}>{data.data.name + " " + data.data.lastName}</Link>
                    <span>{data.data.title}</span>
                </Col>
                <Col className='col-2'>
                    <FaUserPlus style={{fontSize: 1.6 + "rem"}}/>
                </Col>
        </Row>
        <hr/>
    </li>
    )
}

export default PageViewer;