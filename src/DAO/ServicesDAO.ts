import Conection from '../loaders/databaseLoader'
import { Inject } from "typescript-ioc";

export class ServicesDAO {

	constructor(
		@Inject private databaseConnection: Conection
	) { }

	/**
	@router 
    **/
	public async getTables():Promise<any> {
		let data: any
		try {
		  const connection = await this.databaseConnection.getPool()
			const query:any = await connection.query(`SELECT "Id", "Name" FROM public."TableType";`);
			if(query.rowCount > 0 ){
				data = { 'code' :200, 'rows' : query.rows} 
			}else{
				data = { 'code' :201, 'rows' : []} 
			}
			return data
		}catch(error) {
			console.log(error)
			data ={ 'code' :500,'msg' : 'error' } 
			return data
		}
	}

	public async getTableDetail(): Promise<any> {
		let data: any
		try {
		  const connection = await this.databaseConnection.getPool()
			const query:any = await connection.query(`SELECT
																								json_agg(json_build_object(
																									'Id',T1."Id",
																								    'name',T1."Name",
																								    'columns', T2."rows")) as colums
																								FROM (
																								SELECT tt."Id", tt."Name"
																								from  public."TableType" tt
																								) T1
																								INNER JOIN 
																								(
																								SELECT json_agg( json_build_object( 
																									'id',ts."Id",
																									'header',ts."Header", 
																									'dataType', ts."dataType",
																									'format', ts."format",
																									'required', CASE WHEN  ts."required" = '0' THEN False ELSE  True END)) as rows , ts."TableTypeId"
																								from  public."TableStructure" ts 
																								GROUP BY ts."TableTypeId"
																								) T2 ON T1."Id" = T2."TableTypeId";`)// CASE WHEN  ts."required" = '0' THEN False ELSE  True END
			//console.log(query.rows[0])
			if(query.rowCount > 0 ){
				data = { 'code' :200, 'rows' : query.rows[0].colums} 
			}else{
				data = { 'code' :201, 'rows' : []} 
			}
			return data
		}catch(error) {
			console.log(error)
			data ={ 'code' :500,'msg' : 'error' } 
			return data
		}
	}

	public async getDataTable():Promise<any> {
		let data: any
		try {
		  const connection = await this.databaseConnection.getPool()
			const query:any = await connection.query(`SELECT T1."id_t", T1."name", T1."data" FROM
																								( SELECT json_agg( json_build_object(  
																									'Table','Tabla 1',
																									'T1C1',T1."T1C1",
																									'T1C2',T1."T1C2",
																									'T1C3',T1."T1C3",
																								 	'T1C4',T1."T1C4")) AS data, 1 AS id_t, 'Tabla 1'::text AS name
																								FROM  public."TableData1" T1
																								 )T1 
																								 UNION ALL
																								 SELECT  T2."id_t", T2."name", T2."data" AS data FROM
																								 ( SELECT json_agg( json_build_object(  
																									'Table','Tabla 2',
																									'T2C1',T2."T2C1",
																									'T2C2',T2."T2C2",
																									'T2C3',T2."T2C3",
																								 	'T2C4',T2."T2C4",
																								 	'T2C5',T2."T2C5")) AS data, 2 AS id_t, 'Tabla 2'::text AS name
																								FROM  public."TableData2" T2
																								 )T2  
																								UNION ALL
																								SELECT  T3."id_t", T3."name", T3."data"  AS data FROM
																								( SELECT json_agg( json_build_object(  
																									'Table','Tabla 3',
																									'T3C1',T3."T3C1",
																									'T3C2',T3."T3C2",
																									'T3C3',T3."T3C3")) AS data, 3 AS id_t, 'Tabla 3'::text AS name
																								FROM  public."TableData3" T3
																								 )T3;`)
			//console.log('MMMM',query.rows[0])
			if(query.rowCount > 0 ){
				data = { 'code' :200, 'rows' : query.rows} 
			}else{
				data = { 'code' :201, 'rows' : []} 
			}
			return data
		}catch(error) {
			console.log(error)
			data ={ 'code' :500,'msg' : 'error' } 
			return data
		}
	}

	/**
	@router 
    **/
	public async updateTables(colums:string, values:Array<any>, table:string, params:number):Promise<any> {
		let data: any
		let query:any
		try {
		  const connection=await this.databaseConnection.getPool()
		  if(params==1){
			 	query = await connection.query(`UPDATE ${table} SET ${colums} WHERE "T1C1"=$1 AND "T1C2"=$2 AND "T1C3"=$3`,values)
		  }
			if(params==2){
				query = await connection.query(`UPDATE ${table} SET ${colums} WHERE "T2C1"=$1 AND "T2C2"=$2 AND "T2C3"=$3`,values) 
			}
			if(params==3){
				query = await connection.query(`UPDATE ${table} SET ${colums} WHERE "T3C1"=$1 AND "T3C2"=$2 AND "T3C3"=$3`,values) 
			}
			//console.log('queryy',query,'queryy')
			if(query.rowCount > 0 ){
				data = { 'code' :200, 'msg' : "encontrado"} 
			}else{
				data = { 'code' :201, 'msg' : "error"} 
			}
			return data
		}catch(error) {
			console.log(error)
			data ={ 'code' :500,'msg' : 'Proceso ejecuto error' } 
			return data
		}
	}

	/**
	@router 
    **/
	public async saveTables(colums:string, values:Array<any>, table:string):Promise<any> {
		let data: any
		let query:any
		try {
		  const connection = await this.databaseConnection.getPool()
		  if(values.length == 4){
		  	query=await connection.query(`INSERT INTO ${table} (${colums})VALUES($1,$2,$3,$4);`,values);
		  }
		  if(values.length == 5){
		  	query=await connection.query(`INSERT INTO ${table} (${colums})VALUES($1,$2,$3,$4,$5);`,values);
		  }
		  if(values.length == 3){
		  	query=await connection.query(`INSERT INTO ${table} (${colums})VALUES($1,$2,$3);`,values);
		  }
			//console.log('queryy',query,'queryy')
			if(query.rowCount > 0 ){
				data = { 'code' :200, 'msg' : "encontrado"} 
			}else{
				data = { 'code' :201, 'msg' : "error"} 
			}
			return data
		}catch(error) {
			console.log(error)
			data ={ 'code' :500,'msg' : 'error' } 
			return data
		}
	}

	public async deleteTables(values:Array<any>, table:string, params:number):Promise<any> {
		let data: any
		let query:any
		try {
		  const connection = await this.databaseConnection.getPool()
		  if(params==1){
		  	query=await connection.query(`DELETE FROM ${table} WHERE "T1C1"=$1 AND "T1C2"=$2;`,values);
		  }
		  if(params==2){
		  	query=await connection.query(`DELETE FROM ${table} WHERE "T2C1"=$1 AND "T2C2"=$2;`,values);
		  }
		  if(params==3){
		  	query=await connection.query(`DELETE FROM ${table} WHERE "T3C1"=$1 AND "T3C2"=$2;`,values);
		  }
			console.log('queryy',query,'queryy')
			if(query.rowCount > 0 ){
				data = { 'code' :200, 'msg' : "encontrado"} 
			}else{
				data = { 'code' :201, 'msg' : "error"} 
			}
			return data
		}catch(error) {
			console.log(error)
			data ={ 'code' :500,'msg' : 'error' } 
			return data
		}
	}

	public async listarSchema():Promise<any> {
		let data: any
		try {
		  const connection = await this.databaseConnection.getPool()
			const query:any = await connection.query(`SELECT table_schema, table_name
														FROM information_schema.tables
														ORDER BY table_name;`);
			//console.log('--- query',query)
			if(query.rowCount > 0 ){
				data = { 'code' :200, 'rows' : query.rows} 
			}else{
				data = { 'code' :201, 'rows' : []} 
			}
			return data
		}catch(error) {
			console.log(error)
			data ={ 'code' :500,'msg' : 'error' } 
			return data
		}
	}

	public async listarBases():Promise<any> {
		let data: any
		try {
		  const connection = await this.databaseConnection.getPool()
			const query:any = await connection.query(`SELECT datname FROM pg_database;`);
			//console.log('--- query',query)
			if(query.rowCount > 0 ){
				data = { 'code' :200, 'rows' : query.rows} 
			}else{
				data = { 'code' :201, 'rows' : []} 
			}
			return data
		}catch(error) {
			console.log(error)
			data ={ 'code' :500,'msg' : 'error' } 
			return data
		}
	}
}