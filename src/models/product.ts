import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export interface Item {
  title: string;
  price: number;
  imageUrl: string;
  description: string;
}

@Entity()
class Product implements Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false, length: 100 })
  title: string;

  @Column('numeric', { nullable: false })
  price: number;

  @Column('text', { nullable: false })
  imageUrl: string;

  @Column('varchar', { nullable: false, length: 255 })
  description: string;
}

export default module.exports = {
  Product,
};
