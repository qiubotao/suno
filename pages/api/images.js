import { OpenAI } from 'openai';


  export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const key = process.env.OPENAI_API_KEY;
      const promptWord = req.body.prompt;
      console.log(key);
      const openai = new OpenAI({ apiKey: key ,models:'dall-e-3'});

      const response = await openai.images.generate({
        prompt: promptWord,
        n: 1,
        size: "1024x1024",
        model: "dall-e-3"
      });

      console.log(response);
      // 检查响应状态并处理结果
      // if (response.status && response.status !== 200) {
      //   throw new Error(`HTTP error! status: ${response.status}， ${response}`);
      // }


      // 直接发送响应数据
      res.status(200).json(response);
    } catch (error) {
      console.error('Failed to generate cartoon', error);
      res.status(500).json({ error: 'Failed to generate cartoon' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}