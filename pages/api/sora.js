import Replicate from "replicate";
import fs from 'fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {


            const  prompt  = req.body.prompt; // 假设图片以 base64 编码的形式发送
            console.log("inputText" + prompt);

            const apiKey = process.env.REPLICATE_API_TOKEN;

            const replicate = new Replicate({ token: apiKey });

           
            const prediction = await replicate.run(
                "cjwbw/damo-text-to-video:1e205ea73084bd17a0a3b43396e49ba0d6bc2e754e9283b2df49fad2dcf95755",
                {
                    input: {
                        fps: 8,
                        prompt: prompt,
                        num_frames: 50,
                        num_inference_steps: 50
                      }

                  
                }
            );



            console.log(prediction);
            res.status(200).json({ videoUrl: prediction });
        } catch (error) {
            console.error('Error in cartoonizing image: ', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}



