// // pages/api/generateImage.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).end('Method Not Allowed');
    }
  
    try {
      const response = await fetch("https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2", {
        headers: {
          Authorization: "Bearer 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",
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ inputs: req.body.prompt })
      });
  
      if (!response.ok) {
        throw new Error(`Hugging Face API responded with ${response.status}: ${response.statusText}`);
      }
  
      const imageBlob = await response.blob();
  
      // 转换 blob 为 Base64
      const buffer = await imageBlob.arrayBuffer();
      const base64 = Buffer.from(buffer).toString("base64");
      const mimeType = imageBlob.type;
      const imageBase64 = `data:${mimeType};base64,${base64}`;
  
      console.log("imageBase64" + imageBase64);
      res.status(200).json({ image: imageBase64 });
    } catch (error) {
      console.error("Error during image generation:", error);
      res.status(500).json({ message: error.message });
    }
  }

// import { HfInference } from "@huggingface/inference";

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).end('Method Not Allowed');
//   }

//   const promptWord = req.body.prompt;
//   console.log("promptWord " + promptWord);

  
//   try {
//     const HF_TOKEN = "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"; // 替换为您的 Hugging Face API 令牌
//     const inference = new HfInference(HF_TOKEN);
//     const response = await inference.textToImage({
//       model: 'stabilityai/stable-diffusion-2', // 模型名称
//       inputs: req.body.prompt, // 从请求体中获取文本提示
//     });

//     console.log(response.headers.get('content-type'));

  
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }

