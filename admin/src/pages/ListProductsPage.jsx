import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from "react-bootstrap";
import TableItem from "../components/TableItem";
import Loading from "../components/Loading";
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
{/*        <div className="d-flex justify-content-end">
     <nav aria-label="Page navigation example">
 <ul className="pagination">
{
 pagination.currentPage !== 1 && (

   <li className="page-item">
     <a className="page-link" href="#" aria-label="Previous" onClick={() => handlePagination(`/api/v1/movies?page=${pagination.currentPage - 1}&limit=8`)}>
       <span aria-hidden="true">&laquo;</span>
     </a>
   </li>
 )}
{
 pagination.pages.map(page => (
   <li key={page.number} className={`page-item ${page.number == pagination.currentPage && 'active'}`}>
     <a className="page-link" href="#" onClick={() => handlePagination(page.url)}>{page.number}</a></li>
 ))
}
{
 pagination.currentPage !== pagination.pages[pagination.pages.length -1].number && (

   <li className="page-item">
     <a className="page-link" href="#" aria-label="Next" onClick={() => handlePagination(`/api/v1/movies?page=${pagination.currentPage + 1}&limit=8`)}>
       <span aria-hidden="true">&raquo;</span>
     </a>
   </li>
)}
 </ul>
</nav>
</div> */}
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

