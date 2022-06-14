import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cricket from 'App/Models/Cricket'
import {schema} from '@ioc:Adonis/Core/Validator'

export default class CricketsController {
    public async index( {}: HttpContextContract){
        return Cricket.all();  //Select * from Cricket 
    }
    public async store({ request,response } : HttpContextContract){
        
        const newCricketSchema = schema.create({ 
            first_name: schema.string({ trim :true }),
            last_name : schema.string({trim : true }),
        }); 

        const payload = await request.validate({ schema : newCricketSchema });
        const cricket = await Cricket.create(payload); // create instance and save in one go
        response.status(201);
        return cricket;
    }
    public async show({ params }: HttpContextContract){
        return Cricket.findOrFail(params.id);
    }
    public async update({ params,request }: HttpContextContract){
        const body= request.body();
        const cricket= await Cricket.findOrFail(params.id);
        cricket.first_name=body.first_name;
        cricket.last_name=body.last_name;
        return cricket.save();
    }
    public async destroy({ params}: HttpContextContract){
        const cricket = await Cricket.findOrFail(params.id);
        //response.status(204);

        await cricket.delete();
        return cricket;
    }
}
