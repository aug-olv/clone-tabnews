import database from "../../../../infra/database.js";

export default async function status(req, res) {
  const result = await database.query("SELECT 1 + 1 AS sum;");
  console.log(result.rows);
  res.status(200).json({ chave: "valor" });
}
