const database = require("../database/db");

exports.getSaleMap = async (req, res) => {
  try {
    const result = await database.pool.query("SELECT * FROM sales_map");
    return res.status(200).json(result.rows); // result.rows로 수정
  } catch (error) {
    return res.status(500).json({ msg: "Get sales_map Error: " + error.message }); // 에러 메시지 개선
  }
};