import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { UseFetch } from "../hooks/UseFetch"
import PropTypes from "prop-types"
import { createProduct, updateProduct } from "../services/product.services"

export const FormProduct = ({products,setProducts,formValues,setFormValues}) => {
  
  const [categories,setCategories] = useState([])

  const getData = async () => {
    const categories = await UseFetch('categories')
    setCategories([...categories.data])
  }
  useEffect(()=> {
    getData()
  },[])

 
  const handleInpuntChange = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name] : target.value
    })
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault()

    if([formValues.name,formValues.price,formValues.categoryId].includes("")){
      alert("no envie el formulario vacio")
      return
    }

    if (formValues.id) {
      const {data} = await updateProduct(formValues)
      
      const productsUpdate = products.map(product => {
        if (product.id === data.id) {
          product = data
        }
        return product
      })

      setProducts([...productsUpdate])

    } else {
      const {data} = await createProduct(formValues)
      setProducts([...products, data])
    }

    setFormValues({
      id : null,
      name : "",
      color :"",
      price : "",
      discount : "",
      description :"",
      categoryId :""
    })
    
  }

  return (
    <Form className="row" onSubmit={handleSubmitForm}>
      <Form.Group className="mb-3 col-12">
        <Form.Label>Nombre Zapatilla</Form.Label>
        <Form.Control type="text" 
        name="name"
        onChange={handleInpuntChange}
        value={formValues.name}
        />
      </Form.Group>


      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="text"
        name="price"
        onChange={handleInpuntChange}
        value={formValues.price}
        />
      </Form.Group>

      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Descuento</Form.Label>
        <Form.Control type="text"
        name="discount"
        onChange={handleInpuntChange}
        value={formValues.discount}
        />
        </Form.Group>

       {/*  <Form.Group className="mb-3 col-12 col-md-6 ">
        <Form.Label>Campo de color</Form.Label>
        <Form.Control type="color"
        name="hexColor"
        onChange={handleInpuntChange}/>
        </Form.Group> */}

        <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Color</Form.Label>
        <Form.Control type="text"
        name="color"
        onChange={handleInpuntChange}
        value={formValues.color}
        />
        </Form.Group>
      

      <Form.Group className="mb-3 col-12">
      <Form.Label>Categoría</Form.Label>
      <Form.Select className="form-control"
      name="categoryId"
      onChange={handleInpuntChange}>

     <option hidden defaultValue>Selecciona..</option>
      {
        
        categories.map((categoria,index)=> (

          categoria.id == formValues.categoryId?
          <option key={index+categoria.name} selected value={categoria.id}>{categoria.name}</option> :
        <option key={index+categoria.name} value={categoria.id}>{categoria.name}</option>
        ))
      }
      </Form.Select>
    
      </Form.Group>

      <Form.Group className="mb-3 col-12 ">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" type="text"
        name="description"
        onChange={handleInpuntChange}
        value={formValues.description}
        />
      </Form.Group>

      <Form.Group className="mb-3 col-12">
      <div className="d-flex justify-content-between">
      <Button  variant="outline-secondary">
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
  setProducts : PropTypes.func,
  formValues : PropTypes.object,
  setFormValues :  PropTypes.func,
}



