module.exports = (sequelize, DataTypes) => {

alias="Products"

    let cols = {

        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        image:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        name:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        price:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        in_sale:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        category_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
        
    };

let config = {
    tableName:"products",
    timestamps:false,
    underscore : true,
}
    const Product = sequelize.define(alias,cols,config);

    return Product;

}

