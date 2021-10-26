import React from 'react';
import { Row , Col,Button} from 'react-bootstrap';
import products from '../products';
import Product from '../Components/Product';
import '../Components/css/style.css';
import { Link } from 'react-router-dom';





const ProductsScreen = () => {
    return(
        <>
            <h3>Handicraft</h3>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>
            <Link to="/HandiCraft">
                <Button varient="secoundary" className="view">View All</Button>
            </Link>
            
            <h3>Trending Wear</h3>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>
            <Link to="/TrendingWear">
                <Button varient="secoundary" className="view">View All</Button>
            </Link>
            
            <h3>Local Store</h3>
            <Row>
                {products.map (product =>(
                    <Col sm={12} md={6} lg={4} xl={2}>
                        <Product product={product} />
                    </Col>

                ))}
            </Row>
           
                <Link to="/LocalStore">
                    <Button varient="secoundary" className="view">View All</Button>

                </Link>
                
            
            
            
            
        
        </>
    )
}

export default ProductsScreen;