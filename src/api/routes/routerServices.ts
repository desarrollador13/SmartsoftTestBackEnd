import { Request, Response, NextFunction, Router } from 'express'
import ServicesController from '../../controllers/servicesController'
import { Container } from "typescript-ioc";
import MigratedatabaseController from '../../controllers/MigratedatabaseController'



export default class routerServices {
  public app:Router
  constructor(router: Router) {
    this.app = router
  }
  router(): void {

   this.app.get(
      '/services/',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          let responseModel = {status:200, msg:'ok'}
          res.status(200).json(responseModel);
        } catch (error) {
          console.log(error)
        }
      }
    )

    this.app.get(
      '/services/migrate/',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const migratedatabaseController: MigratedatabaseController = Container.get(MigratedatabaseController);
          let responseModel = await migratedatabaseController.migracion();
          res.status(200).json(responseModel);
        } catch (error) {
          console.log(error)
        }
      }
    )

  this.app.get(
      '/services/schema/',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const servicesController: ServicesController = Container.get(ServicesController);
          let responseModel = await servicesController.listarSchema();
          res.status(200).json(responseModel);
        } catch (error) {
          console.log(error)
        }
      }
    )
  /**
   *@method : get
  * DEVUELVE SERVICO DE CIUDADES
  **/
  /*"exec": "SET NODE_ENV=test&& ts-node ./src/app.ts"*/
    this.app.get(
      '/getTables/',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const servicesController: ServicesController = Container.get(ServicesController);
          let responseModel = await servicesController.getTables();
          res.status(200).json(responseModel);
        } catch (error) {
          console.log(error)
        }
      }
    )

    this.app.get(
      '/getTableDetail/',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const servicesController: ServicesController = Container.get(ServicesController);
          let responseModel = await servicesController.getTableDetail();
          res.status(200).json(responseModel);
        } catch (error) {
          console.log(error)
        }
      }
    )

    this.app.get(
      '/Data/',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const servicesController: ServicesController = Container.get(ServicesController);
          let responseModel = await servicesController.getDataTable();
          res.status(200).json(responseModel);
        } catch (error) {
          console.log(error)
        }
      }
    )

    this.app.post(
      '/saveTables/',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const servicesController: ServicesController = Container.get(ServicesController);
          let responseModel = await servicesController.saveTables(req.body);
          res.status(200).json(responseModel);
        } catch (error) {
          console.log(error)
        }
      }
    )

    this.app.put(
      '/updateTables/',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const servicesController: ServicesController = Container.get(ServicesController);
          let responseModel = await servicesController.updateTables(req.body);
          res.status(200).json(responseModel);
        } catch (error) {
          console.log(error)
        }
      }
    )

    this.app.delete(
      '/deleteTables/:params1/:params2/:table/',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          let requets:object|any={}
          requets={
            params1:req.params.params1,
            params2:req.params.params2,
            table:req.params.table
          }
          const servicesController: ServicesController = Container.get(ServicesController);
          let responseModel = await servicesController.deleteTables(requets);
          res.status(200).json(responseModel);
        } catch (error) {
          console.log(error)
        }
      }
    )

    this.app.get(
      '/services/bases/',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const servicesController: ServicesController = Container.get(ServicesController);
          let responseModel = await servicesController.listarBases();
          res.status(200).json(responseModel);
        } catch (error) {
          console.log(error)
        }
      }
    )
  }
}