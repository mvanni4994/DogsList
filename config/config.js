module.exports = {
    "development": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": "rehoming",
        "host": "127.0.0.1",
        "port": 3306,
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": "Tstai.410",
        "database": "database_test",
        "host": "127.0.0.1",
        "port": 3306,
        "dialect": "mysql"
    },
    "production": {
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
    }
}