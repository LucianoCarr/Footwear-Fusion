import Proptypes, { func } from 'prop-types'
import { useState } from "react"
import { Form } from "react-bootstrap"

export const FormSearch = ({getMovies}) => {
    const [valuesForm,setValuesForm] = useState({})
    const handleInputChange = ({target}) => {
        setValuesForm({
            ...valuesForm,
            [target.name] :  target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getMovies(`/api/v1/movies?keyword=${valuesForm.keyword}`)
    }

  return (
    <Form onSubmit={handleSubmit}>
        <div className="input-group ">
        
        <input type="text" name="keyword" className="form-control" placeholder='Buscar' onChange={handleInputChange}/>
        <button className="btn btn-outline-dark input-group-text">
            <i className="fa fa-search"></i>
        </button>
        </div>
    </Form>
  )
}

<<<<<<< HEAD
export default FormSearch


FormSearch.prototypes = {
  getMovies : PropTypes.func
=======
FormSearch.Proptypes = {
    getMovies : Proptypes.func
>>>>>>> b4c1f54c665caa5c6b5f64ce071b692dfb02d950
}