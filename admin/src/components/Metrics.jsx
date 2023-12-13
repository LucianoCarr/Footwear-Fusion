import PropTypes from 'prop-types';
import { MetricItem } from './MetricItem'



export const Metrics = ({totalProducts,ofertas}) => {
	const items = [
		{
	    id : crypto.randomUUID(),
		color : "primary",
		title : "Productos disponibles",
		value : totalProducts,
		icon : "fa-shoe-prints"
		},
	{	
		id : crypto.randomUUID(),
		color : "success",
		title : "Categorias",
		value : 3,
		icon : "fa-users"
	},
	{	
		id : crypto.randomUUID(),
		color : "warning",
		title : "Ofertas",
		value : ofertas,
		icon : "fa-tag"
	},
]
  return (
    <div className="row">
		{items.map(({id,title,value,color,icon}) => (
		<MetricItem 
			key={id} title={title} value={value} color={color} icon={icon}/>
			))}						
	</div>										
  )
}

Metrics.propTypes = {
	totalProducts : PropTypes.number,
	ofertas : PropTypes.number
	
}