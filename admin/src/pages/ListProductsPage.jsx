import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from "react-bootstrap";
import TableItem from "../components/TableItem";
import FormSearch from "../components/FormSearch";
import FormProduct from "../components/FormProduct";


export const ListProductsPage = () => {
       return  (
  <Row className="w-100">
       <Col sm={12} md={6} lg={4}>
         <Card className="mb-3">
           <CardHeader>
             <CardTitle>Zapatilla</CardTitle>
           </CardHeader>
         </Card>
       <CardBody>
       <FormProduct/>
       </CardBody>
       </Col>
       <Col sm={12} md={6} lg={8}>
       <Card className="align-self-center w-100 p-3">
     <FormSearch/> 
     <CardBody>
   <Table>
   <thead striped bordeless>
     <tr>
       <th>Nombre</th>
       <th>Precio</th>
       <th>Descuento</th>
       <th>Categoria</th>
       <th>Color</th>
     </tr>
   </thead>
   <tbody>
{/*   {
    product.map(({id, name, price, discount, color, categoryId}) => ( <TableItem key={id} name={name} price={price} discount={discount} color={color} categoryId={categoryId} /> ))
  } */}
  
  </tbody>
  </Table>
  </CardBody>
  </Card>
       </Col>
     </Row>
   
   )
 }

