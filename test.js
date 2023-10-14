const provinciasArray = ["Buenos Aires","Catamarca","Chaco","Chubut","Cordoba","Corrientes","Entre Rios","Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuquen","Rio Negro","Salta","San Juan","San Luis","Santa Cruz","Santa fe","Santiago del Estero","Tierra del Fuego","Tucuman"]
/* const ciudadArray = ["CABA","San Miguel","Muñiz","Wilde","Bella Vista"] */

const provinciasDB = provinciasArray.map(provincia => {
    return {
      provincie : provincia
    }
  })

/*   const ciudadDB = ciudadArray.map(ciudad => {
    return {
      city : ciudad
  
    }
  }) */

  const adressDB = {
    adress : null,
    provinciasDB,
    createdAt : new Date,
    updatedAt : new Date  }


console.log(adressDB);