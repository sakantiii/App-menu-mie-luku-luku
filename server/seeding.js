const pool = require("./connection");
const data = require("./menu.json");

// Validasi dan ekstraksi data untuk database
function extractData(data) {
  const items = [];
  data.forEach((category) => {
    category.items.forEach((item) => {
      if (item.id && item.title && item.price && item.imageUrl) {
        items.push(item);
      }
    });
  });
  return items;
}

const validData = extractData(data);

// Buat query SQL
const newData = validData.map((el) => {
  const title = el.title || "";
  const price = el.price || 0;
  const imageUrl = el.imageUrl || "";
  const status = el.status || "";
  const deskripsi = el.deskripsi || "";

  return `('${title}', ${price}, '${imageUrl}', '${status}', '${deskripsi}')`;
});

const newDataToInsert = newData.join(",");

const seedDataQuery = `
  INSERT INTO Menu ("title", "price", "imageUrl", "status", "deskripsi")
  VALUES ${newDataToInsert}
`;

async function runSeed() {
  try {
    console.log("Query to be executed:", seedDataQuery); // Debug query
    await pool.query(seedDataQuery);
    console.log("Success seed table menu");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

runSeed();
