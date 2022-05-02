export default {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Reto backend API",
      version: "1.0.0",
      description: "Reto backend por LLATAN S.A.C."
    },
    servers:[
      {
        url: "http://localhost:4000",
        description: "Local Dev"
      },
      {
        url: "https://reto-backend.herokuapp.com",
        description: "Production"
      }
    ],
    tags:[
      {
        name: "Client",
        description: "Client Route"
      }
    ],
    paths: {
      "/clients/creacliente":{
        post: {
          tags: ["Client"],
          description: "En este endpoint creas un cliente",
          requestBody:{
            content:{
              "application/json":{
                schema: {
                  type: "object",
                  properties:{
                    nombre:{
                      type: "string",
                      description: "Nombre del cliente",
                      example: "Pepe",
                      require: true
                    },
                    apellido:{
                      type: "string",
                      description: "Apellido del cliente",
                      example: "Romero",
                    },
                    edad:{
                      type: "integer",
                      description: "Edad del cliente",
                      example: 25,
                    },
                    fechaNacimiento:{
                      type: "string",
                      description: "Fecha nacimiento del cliente en formato 'DD-MM-YYYY'",
                      example: "24-12-1995",
                    }
                  }
                }
              }
            }
          },
          responses:{
            200: {
              description: "Te retorna el cliente creado",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    example:{
                      nombre: "Pepe",
                      apellido: "Romero",
                      edad: 25,
                      fechaNacimiento: "24-12-1995"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/clients/kpideclientes":{
        get: {
          tags: ["Client"],
          description: "Endpoint para obtener promedio de edad de los clientes y la desviacion standar",
          responses:{
            200:{
              description: "Retorna un json con el Promedio de edad y Desviacion Standar",
              content:{
                "application/json":{
                  schema: {
                    type: "object",
                    example: {
                      promedioEdadClientes: 30.26,
                      desviacionStandarClientes: 12.46 
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/clients/listclientes": {
        get: {
          tags: ["Client"],
          description: "Endpoint para traer todos los clientes con sus datos y fecha probable de muerte",
          responses:{
            200: {
              description: "Retorna lista de clientes con datos agregando fecha probable de muerte",
              content:{
                "application/json":{
                  schema:{
                    type: "oject",
                    example: [
                      {
                        nombre: "Test1",
                        apellido: "Test1",
                        edad: 24,
                        fechaNacimiento: "23-04-1997",
                        fechaFallecimiento: "28-05-2034"
                      },
                      {
                        nombre: "Test2",
                        apellido: "Test2",
                        edad: 28,
                        fechaNacimiento: "03-11-1994",
                        fechaFallecimiento: "14-02-2056"
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  apis: ['../routes/clients.ts', '../models/clients.ts']
}
