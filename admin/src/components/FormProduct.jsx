import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { UseFetch } from "../hooks/UseFetch"

import PropTypes from "prop-types"

export const FormProduct = ({products,setProducts}) => {
  
  const [categories,setCategories] = useState([])
 
  const getData = async () => {
    const categories = await UseFetch('categories')
    setCategories([...categories.data])
  }
  useEffect(()=> {
    
    getData()
  },[])

  const [formValues,setFormValues] = useState({
    name : "",
    color :"",
    price : "",
    discount : "",
    description :"",
    categoryId :""
  })

  const handleInpuntChange = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name] : target.value
    })
  }

  const handleSubmitFormCreate = async (event) => {
    event.preventDefault()

    if([formValues.name,formValues.price,formValues.description,formValues.categoryId].includes("")){
      alert("no envie el formulario vacio")
      return
    }
     
    const {data} = await UseFetch("products","POST",formValues)

    console.log(data)
    
    setProducts([
      ...products,
      data
    ])
  }

  return (
    <Form className="row" onSubmit={handleSubmitFormCreate}>
      <Form.Group className="mb-3 col-12">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre zapatilla" 
        name="name"
        onChange={handleInpuntChange}/>
        
      </Form.Group>


      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number"
        name="price"
        onChange={handleInpuntChange}/>
        
      </Form.Group>

      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Descuento</Form.Label>
        <Form.Control type="number"
        name="discount"
        onChange={handleInpuntChange}/>
        </Form.Group>

        <Form.Group className="mb-3 col-12 ">
        <Form.Label>Color</Form.Label>
        <Form.Control type="color"
        name="hexColor"
        onChange={handleInpuntChange}/>
        </Form.Group>

        
      

      <Form.Group className="mb-3 col-12">
      <Form.Label>Categoría</Form.Label>
      <Form.Select className="form-control"
      name="categoryId"
      onChange={handleInpuntChange}>

     <option hidden >Selecciona..</option>
      {
        categories.map((categoria,index)=> <option key={index+categoria.name} value={categoria.id}>{categoria.name}</option>)
      }
      </Form.Select>
    
      </Form.Group>

      <Form.Group className="mb-3 col-12 ">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" type="text"
        name="description"
        onChange={handleInpuntChange}/>
  
        
      </Form.Group>

      <Form.Group className="mb-3 col-12">
      <div className="d-flex justify-content-between">
      <Button  variant="outline-dark">
        Cancelar
      </Button>

      <Button type="submit"  variant="outline-dark">
        Guardar
      </Button>
      </div>
      </Form.Group>
    </Form>
  )
}


FormProduct.propTypes = {
  products: PropTypes.array,
  setProducts : PropTypes.func
}



