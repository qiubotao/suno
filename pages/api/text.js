import { OpenAI } from 'openai';


  export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const key = process.env.OPENAI_API_KEY;
      // const promptWord = req.body.prompt;
      // console.log(key);
      const inputText = "海豚在游泳";

      console.log(inputText);
      const openai = new OpenAI({ apiKey: key });


      const response = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct", // 或者使用 gpt-3.5-turbo，根据您的需求选择模型
        prompt: `Expand this text into a more detailed and rich version: ${inputText}`, // 直接将问题作为 prompt
        temperature: 0.5,
        max_tokens: 100,
      });
      
      if (response && response.data && response.data.choices && response.data.choices.length > 0) {
        console.log(response.data.choices[0].text.trim());
        res.status(200).json({ answer: response.data.choices[0].text.trim() });
      } else {
        console.error('No choices found in the response' + response);
        res.status(500).json({ error: 'No choices found in the response' });
      }

      console.log(response);
      console.log("data" + response.data);
      console.log("choices" + response.choices);
      console.log("choices0" + response.choices[0]);

      console.log(response.choices[0].text.trim());
      // console.log(response.data.choices[0].text.trim());

  

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