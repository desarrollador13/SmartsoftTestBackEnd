import { Request, Response, NextFunction } from 'express'
import { Inject } from "typescript-ioc";
import { ServicesDAO } from '../DAO/ServicesDAO'
import requests from 'request-promise'


export default class ServicesController {
	constructor(
		@Inject private servicesDAO: ServicesDAO,
	) {
	}
 /** **/
	async getTables():Promise<any> {
		let res:any;
		try{
			res = await this.servicesDAO.getTables()
			return res
		}catch(error){
			res = { 'code' :500, 'msg' : 'error'}
			return res
		}
		
	}

	async getTableDetail():Promise<any> {
		let res:any;
		try{
			res = await this.servicesDAO.getTableDetail()
			return res
		}catch(error){
			res = { 'code' :500, 'msg' : 'error'}
			return res
		}
	}

	async getDataTable():Promise<any> {
		let res:any;
		try{
			res = await this.servicesDAO.getDataTable()
			return res
		}catch(error){
			res = { 'code' :500, 'msg' : 'error'}
			return res
		}
	}

	async saveTables(requets:object|any):Promise<any> {
		let res:any;
		let colums:string=''
		let values:Array<any>=[]
		let table:string=''
		try {
			//console.log(requets,'request')
			if(requets.table=='TableData1'){
				colums=`"T1C1","T1C2","T1C3","T1C4"`
				values=[requets.T1C1,requets.T1C2,requets.T1C3,requets.T1C4]
				table=`public."TableData1"`
				res=await this.servicesDAO.saveTables(colums,values,table)
			}
		
			if(requets.table=='TableData2'){
				colums=`"T2C1","T2C2","T2C3","T2C4","T2C5"`
				values=[requets.T2C1,requets.T2C2,requets.T2C3,requets.T2C4,requets.T2C5]
				table=`public."TableData2"`
				res=await this.servicesDAO.saveTables(colums,values,table)

			}
			//{ T3C1: '24', T3C2: 'PRUEBA', T3C3: '2020-08-28', table: 'TableData3' } request

			if(requets.table=='TableData3'){
				colums=`"T3C1","T3C2","T3C3"`
				values=[requets.T3C1,requets.T3C2,requets.T3C3]
				table=`public."TableData3"`
				res=await this.servicesDAO.saveTables(colums,values,table)

			}
			return res
		}catch(error){
			res = { 'code' :500, 'msg' : 'error'}
			return res
		}
	}

	async updateTables(requets:object|any):Promise<any> {
		let res:any;
		let colums:string=''
		let values:Array<any>=[]
		let table:string=''
		let params:number
		try {
			//console.log(requets,'request')
			if(requets.table=='TableData1'){
				colums=`"T1C1"='${requets.T1C1}',"T1C2"='${requets.T1C2}',"T1C3"='${requets.T1C3}',"T1C4"='${requets.T1C4}'`
				values=[requets.dato1,requets.dato2,requets.dato3]
				table=`public."TableData1"`
				params=1
				res=await this.servicesDAO.updateTables(colums,values,table,params)
			}
		
			if(requets.table=='TableData2'){
				colums=`"T2C1"='${requets.T2C1}',"T2C2"='${requets.T2C2}',"T2C3"='${requets.T2C3}',"T2C4"='${requets.T2C4}',"T2C5"='${requets.T2C5}'`
				values=[requets.dato1,requets.dato2,requets.dato3]
				table=`public."TableData2"`
				params=2
				res=await this.servicesDAO.updateTables(colums,values,table,params)

			}
			//{ T3C1: '24', T3C2: 'PRUEBA', T3C3: '2020-08-28', table: 'TableData3' } request

			if(requets.table=='TableData3'){
				colums=`"T3C1"='${requets.T3C1}',"T3C2"='${requets.T3C2}',"T3C3"='${requets.T3C3}'`
				values=[requets.dato1,requets.dato2,requets.dato3]
				table=`public."TableData3"`
				params=3
				res=await this.servicesDAO.updateTables(colums,values,table,params)

			}
			return res
		}catch(error){
			res = { 'code' :500, 'msg' : 'error'}
			return res
		}
	}

	async deleteTables(requets:object|any):Promise<any>{
		let res:any
		let values:Array<any>=[]
		let table:string=''
		let params:number
		try{
			console.log(requets,'request')
			if(requets.table=='TableData1'){
				values=[requets.params1,requets.params2]
				table=`public."TableData1"`
				params=1
				res=await this.servicesDAO.deleteTables(values,table,params)
			}
			if(requets.table=='TableData2'){
				values=[requets.params1,requets.params2]
				table=`public."TableData2"`
				params=2
				res=await this.servicesDAO.deleteTables(values,table,params)
			}
			if(requets.table=='TableData3'){
				values=[requets.params1,requets.params2]
				table=`public."TableData3"`
				params=3
				res=await this.servicesDAO.deleteTables(values,table,params)
			}
			return res
		}catch(error){
			res = { 'code' :500, 'msg' : 'error'}
			return res
		}

	}

	async listarSchema():Promise<any> {
		let res:any;
		try{
			res = await this.servicesDAO.listarSchema()
			return res
		}catch(error){
			res = { 'code' :500, 'msg' : 'error'}
			return res
		}
	}

	async listarBases():Promise<any> {
		let res:any;
		try{
			res = await this.servicesDAO.listarBases()
			return res
		}catch(error){
			res = { 'code' :500, 'msg' : 'error'}
			return res
		}
	}

}
