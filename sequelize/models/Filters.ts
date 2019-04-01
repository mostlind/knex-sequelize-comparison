import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table
export default class Filters extends Model<Filters> {
  @Column
  filterName?: string;

  @Column(DataType.TEXT)
  contentJSON?: string;
}
