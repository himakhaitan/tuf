// Imports
const express = require("express");
const submissionsValidator = require("../validations/submissions");
const sql = require("mssql");

// Instanciating Router
const router = express.Router();

/*
  @route  GET /submissions/all
  @desc   Get all Submissions Route
  @access { general }
  @params [ ]
  @return [ success, message ]
*/
router.get("/all", async (req, res) => {
  // Fetch Data
  const result = await sql.query(`SELECT * FROM submissions`);
  return res.json({
    status: true,
    message: "Data Fetched Successfully!",
    data: result.recordsets[0],
  });
});

/*
  @route  POST /submissions/new
  @desc   New Submissions Route
  @access { general }
  @params [ name, email ]
  @return [ success, message ]
*/
router.post("/new", async (req, res) => {
  // const { error, isValid } = submissionsValidator(req.body);

  // // If the req data is not fine
  // if (!isValid) {
  //   return res.json({
  //     success: false,
  //     message: "Error in data",
  //     error,
  //   });
  // }

  // Perform the necessary operations here (as per the logic)
  const result =
    await sql.query(`INSERT INTO submissions (username, code, language, stdin)
  VALUES ('${req.body.username}', '${req.body.code}', '${req.body.language}', '${req.body.stdin}')`);
  // Returning a Response
  return res.json({
    success: true,
    message: "Data Successfully Posted",
    result,
  });
});

module.exports = router;
