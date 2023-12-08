import {useLoaderData} from 'react-router-dom'
import { CategoriesInDb } from "../../components/CategoriesInDb"
import { LastProductInDb } from "../../components/LastProductInDb"
import { Metrics } from "../../components/Metrics"


export const HomeAdmin = () => {

  const {totalProducts,categories,ofertas} = useLoaderData()
  

  return (
    <>
    <Metrics totalProducts={totalProducts}  ofertas={ofertas}/>
    <div className="row">
    <LastProductInDb/>
    <CategoriesInDb categories={categories}/>
    </div>
    </>
  )
}
