import PropTypes from 'prop-types'

export const TableItem = ({product : {id,name,color,price,discount,categoria}, handleEditForm, handleDeleteProduct}) => {
  return (
    <tr>
    <td>{name}</td>
    <td>{color}</td>
    <td>{price}</td>
    <td>{discount}</td>
    <td>{categoria.name}</td>
    
    <td>
      <div className='d-flex'>
      <button className='btn btn-sm btn-outline-success mr-3' onClick={() => handleEditForm(id)} >
        <i className='fas fa-pencil-alt' aria-hidden="true"></i>
      </button>
      <button className='btn btn-sm btn-outline-danger' onClick={() => handleDeleteProduct(id)} >
        <i className='fas fa-trash-alt' aria-hidden="true"></i>
      </button>
      </div>
    </td>
  </tr>
  )
}

TableItem.propTypes = {
    product : PropTypes.object,
    handleEditForm : PropTypes.func,
    handleDeleteProduct : PropTypes.func,
  
}


