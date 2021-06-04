import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class UserToken extends Model {
  @Column
  userId: number;

  @Column
  token: string;

}