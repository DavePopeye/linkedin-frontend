import React from 'react';
import { Row, Col , Image} from 'react-bootstrap';
import { FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './PageViewer.css'

const PageViewer = (data) => {
    console.log("Page viewer data", data.data)
    return(
    <li className='mb-2'>
        <Row>
            <Col className='col-3'>
            {data.data.image ? <Image  src={data.data.image}  style={{width: '100%'}} alt={`${data.data.name}'s image`} roundedCircle />
                 :
                 <Image  src='https://via.placeholder.com/150'  style={{width: '100%'}} alt="User's picture" roundedCircle />
                 }
               
            </Col>
                <Col className='col-7 d-flex'>
                    {/* {if (data.data.username === user7){
                        console.log("same user")
                    }else{
                        
                    }} */}
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