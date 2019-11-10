import { getConnectionManager, Table } from 'typeorm';
import config from './config';
import { TableOptions } from 'typeorm/schema-builder/options/TableOptions';

async function run () {
    const connection = await getConnectionManager().create(config).connect();

    const options: TableOptions = {
        name: `przd.test`,
        columns: [
            {
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: false,
            }
        ],
    };

    await connection
        .createQueryRunner()
        .dropTable(new Table(options), true);

    await connection.query(`
            CREATE TABLE IF NOT EXISTS "przd"."test" (
                "id" integer NOT NULL,
                CONSTRAINT "PK_test_constraint" PRIMARY KEY ("id")
            ) WITH ( OIDS=FALSE );
        `);

    await connection.query(`INSERT INTO "przd"."test" (id) VALUES (1);`);

    await connection.createQueryRunner()
        .clearTable(`przd.test`);

    await connection.query(`INSERT INTO "przd"."test" (id) VALUES (1);`);

    console.log('Closing connection');
    await connection.close();
    console.log('Connection closed');
}

run();