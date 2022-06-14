import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pets extends BaseSchema {
  protected tableName = 'pets'
  
  public async up () {
    this.schema.createTableLike('cats', 'pets')
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
