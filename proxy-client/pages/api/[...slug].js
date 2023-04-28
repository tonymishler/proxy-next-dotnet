import axios from "axios";

export default function handler(req, res) {
    const { slug} = req.query;
    const args = slug.join('/');


  console.log('logging args');
  console.log(args);

  const httpMethod = req.method?.toLowerCase();

  axios({
    method: httpMethod,
    url: `http://localhost:5225/${args}`,
    data: req.body,
    headers: req.headers,
  })
    .then((response) => {
      console.log(response.data);
      res.status(200).json({ message: response.data });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    });
  }
  