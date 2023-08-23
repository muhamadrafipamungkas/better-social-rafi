### How to start this application

This is a Node JS application that runs on Node version 18+

List of library / package that need to installed on your computer to run this application:
- Yarn
- Node 18+
- node-pg-migrate (via npx)

### How to install

Then you need to do these steps:
1. Execute this command

    ```yarn install```

2. Run the migration (seeder already included)

    ```DATABASE_URL=postgres://test:test@localhost:5432/test npx node-pg-migrate up```

    Change the database URL above with your database URL (PostgreSQL)

### How to running locally
You could use this command below:

```yarn dev```


##### / ! \ / ! \ / ! \ / ! \
**Please make sure to check your .env.development variable to use this command**

