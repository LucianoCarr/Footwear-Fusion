import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"


const FormProduct = () => {

  
  return (
    <Form className="row">
      {/* Nombre */}
<FormGroup className="form-floating mb-3">
  <FormControl type="text" name="name"  className="form-control"  placeholder="nombre" />

  <FormLabel>Nombre</FormLabel>
</FormGroup>
{/* Precio */}
<FormGroup className="form-floating mb-3">
  <FormControl type="number" name="price" placeholder="Precio" />

  <FormLabel>Precio</FormLabel>
</FormGroup>
{/* Descuento */}
<FormGroup className="form-floating mb-3">
  <FormControl type="number" name="discount" placeholder="Descuento" />

  <FormLabel>Descuento</FormLabel>
</FormGroup>
{/* Color */}
<FormGroup className="form-floating mb-3">
  <FormControl type="text" name="color" placeholder="Color" />

  <FormLabel>Color</FormLabel>
</FormGroup>

{/* Categoria */}
<FormGroup className="form-floating mb-3">
<select className="form-control" name="CategoryId" placeholder="Categoria">
  <option hidden defaultChecked>
    Categoria
  </option>

  </select>
</FormGroup>

<button type="submit" className="w-100 mb-3" variant="outline-dark">Guardar</button>
<button className="w-100" variant="outline-secondary">Cancelar</button>
    </Form>  
  )
}

export default FormProduct
