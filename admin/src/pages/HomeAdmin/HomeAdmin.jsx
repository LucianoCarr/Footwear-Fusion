import {useLoaderData} from 'react-router-dom'
import { CategoriesInDb } from "../../components/CategoriesInDb"
import { LastProductInDb } from "../../components/LastProductInDb"
import { Metrics } from "../../components/Metrics"

export const HomeAdmin = () => {

  const {totalProducts,categories} = useLoaderData()

  return (
    <>
    <Metrics totalProducts={totalProducts} categories={categories}/>
    <div className="row">
    <LastProductInDb/>
    <CategoriesInDb categories={categories}/>
    </div>
    </>
  )
}
