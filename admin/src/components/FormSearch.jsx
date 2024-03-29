import Proptypes, { func } from 'prop-types'
import { useState } from "react"
import { Form } from "react-bootstrap"

export const FormSearch = () => {
    const [valuesForm,setValuesForm] = useState({})
    
    const handleInputChange = ({target}) => {
        setValuesForm({
            ...valuesForm,
            [target.name] :  target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
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

FormSearch.Proptypes = {
    getMovies : Proptypes.func

}