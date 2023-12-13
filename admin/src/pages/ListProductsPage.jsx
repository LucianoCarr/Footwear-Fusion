import {Row,Col,Card,CardBody,CardTitle, Table} from "react-bootstrap"
import { FormSearch } from "../components/FormSearch"
import { TableItem } from "../components/TableItem"
import { FormProduct } from "../components/FormProduct"
import { useEffect, useState } from "react"
import { UseFetch } from "../hooks/UseFetch"

export const ListProductsPage = () => {

  const [products,setProducts] = useState([])
  const getData = async () => {
    const {data} = await UseFetch('products')
   setProducts(data)
  }
  useEffect(()=> {
    
    getData()
  },[])

  

  return (
   
      <Row>
        <Col xs={12} lg={4}> 
          <Card className='mb-3'>
            <Card.Header>
              <CardTitle>{'Agregar'}Zapatillas</CardTitle>
            </Card.Header>
            <Card.Body>
              <FormProduct products={products} setProducts={setProducts}/>
            </Card.Body>
          </Card>

        </Col>
        <Col xs={12} lg={8}>
          <Card className='shadow mb-5'>
            
            <Card.Header className="d-flex justify-content-end">
              <FormSearch/>
            </Card.Header>
            <CardBody>
              <Table striped borderless responsive>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Color</th>
                    <th>Precio</th>
                    <th>Descuento</th>
                    <th>Categoría</th>
                    <th>Descripcion</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    products.map((product,index) =><TableItem key={product.name+index} product={product}/>)
                  }
                
                  
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    
  )
}
