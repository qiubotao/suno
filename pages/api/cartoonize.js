const formidable = require('formidable');
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // const form = new formidable.IncomingForm();
    // form.parse(req, async (err, fields, files) => {
    //   if (err) {
    //     res.status(500).json({ error: err.message });
    //     return;
    //   }



      try {

        const {files,fields} = await parseForm(req);


      if (!files.image || files.image.length === 0 || !files.mask || files.mask.length === 0) {
        return res.status(400).json({ error: 'Missing image or mask file' });
      }

      
        const formData = new FormData();
        formData.append('image', fs.createReadStream(files.image[0].filepath), files.image[0].originalFilename);
        formData.append('mask', fs.createReadStream(files.mask[0].filepath), files.mask[0].originalFilename);
        formData.append('model', 'dall-e-2');
        formData.append('prompt', fields.prompt[0]);
        formData.append('n', 1);
        formData.append('size', '1024x1024');
        console.log("112");
        
        const response = await axios.post('https://api.openai.com/v1/images/edits', formData, {
          headers: {
            ...formData.getHeaders(),
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          },
        });
        console.log('Response Body:', response.data);
        res.status(200).json(response.data);

      } catch (error) {
        // console.log("error " + error);
        // res.status(500).json({ error: error.message });
        console.error('Error:', error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).json(error.response ? error.response.data : { message: error.message });      
      }
    // });
  } else {
    res.status(405).send('Method Not Allowed');
  }
}

function parseForm(req) {
  return new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
}
