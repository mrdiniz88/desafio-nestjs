import { Column, Table, Model, DataType, PrimaryKey } from "sequelize-typescript";


@Table({
    tableName: 'transactions',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
})
export class Transaction extends Model {
    @PrimaryKey
    @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4})
    id: string;

    @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4})
    account_id: string;

    @Column({type: DataType.DECIMAL(10, 2), allowNull: false})
    amount: number;
    
}
