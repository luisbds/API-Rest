/* configurar as crendeciais de acesso ao banco de dados */
module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'asd321',
    database: 'sistemaReserva',
    define: {
        timestamps: true,
        underscored: true 
    }
}