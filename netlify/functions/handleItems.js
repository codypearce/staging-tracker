const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNA_SECRET_KEY,
});

exports.handler = async (event) => {
  if (event.httpMethod === "GET") {
    try {
      const results = await client.query(
        q.Paginate(q.Match(q.Index("all_items")))
      );

      //   const results = await client.query(
      //     q.Paginate(q.Match(q.Ref("indexes/all_items")))
      //   );
      return {
        statusCode: 200,
        body: JSON.stringify(results),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify(error),
      };
    }
  }
  // Add handling for other HTTP methods (POST, DELETE, etc.)
};
