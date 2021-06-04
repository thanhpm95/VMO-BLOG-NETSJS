import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Tag extends Model {
  @Column
  tagName: string;

  @Column
  discription: string;

  @Column
  postId: number;

}