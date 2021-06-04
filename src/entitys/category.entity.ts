import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Category extends Model {
  @Column
  categoryName: string;

  @Column
  discription: number;

  @Column
  postId: number;
}