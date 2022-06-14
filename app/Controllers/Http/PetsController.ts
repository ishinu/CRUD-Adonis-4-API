import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PetsController {
    public async index( {}: HttpContextContract){
        return 'GET pets';
    }
    public async store({ request,response } : HttpContextContract){
        response.status(201);
        return {
            message:'POST pet',
            body : request.body() 
        }
    }
    public async show({ params }: HttpContextContract){
        return 'GET pet : '+ params.id;
    }
    public async update({ params }: HttpContextContract){
        return 'PUT pet : '+ params.id;
    }
    public async destroy({}: HttpContextContract){
        return 'DELETE pet'
    }
}
