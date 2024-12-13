// file ini untuk melakukan setup table ke dalam database
const pool = require("./connection");

let createTableMenu = `
  CREATE TABLE Menu (
  "id" SERIAL PRIMARY KEY, 
  "title" VARCHAR(50),
  "price" INTEGER,
  "imageUrl" TEXT, 
  "status" VARCHAR(20),
  "deskripsi" VARCHAR (100)
);
`;

// koneksi ke database => asynchronous

async function runSetup() {
  try {
    await pool.query(createTableMenu);
    console.log("Success setup table menu");
  } catch (error) {
    console.log(error);
  }
}

runSetup();
