import PropTypes from "prop-types";

const TableItem = ({product : { name, price, cateoryId, color}}) => {
  return (
      <tr>
    <td>{name}</td>
    <td>${price}</td>
    <td>{discount}</td>
    <td>{cateoryId}</td>
    <td>{color}</td>
    <td>
      <div className="d-flex">
        <button className="btn btn-sm btn-outline-success mr-3"><i className="fas fa-pencil-alt"></i></button>
        <button className="btn btn-sm btn-outline-danger"><i className="fas fa-trash-alt"></i></button>
      </div>
    </td>
  </tr>
   
   )
}

TableItem.propTypes = {
  product : PropTypes.object,
   
}

export default TableItem
