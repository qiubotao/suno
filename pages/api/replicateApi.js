import Replicate from "replicate";
import fs from 'fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // console.log("in0");
            // console.log(req.body);
            const { image } = req.body; // 假设图片以 base64 编码的形式发送
            // console.log(image);

            const apiKey = process.env.REPLICATE_API_TOKEN;

            const replicate = new Replicate({ token: apiKey });

            // console.log("in");
            // 选择一个卡通化模型
            // const model = await replicate.models.get("catacolabs/cartoonify:f109015d60170dfb20460f17da8cb863155823c85ece1115e1e9e4ec7ef51d3b");
            // console.log("in2");

            // 使用模型进行卡通化
            // const prediction = await model.predict({
            //   image: image, // 这里传入 base64 编码的图像数据
            // });
            const prediction = await replicate.run(
                "catacolabs/cartoonify:f109015d60170dfb20460f17da8cb863155823c85ece1115e1e9e4ec7ef51d3b",
                {
                    input: {
                        // seed: 2862431,
                        image: image, // 这里传入 base64 编码的图像数据
                    }
                }
            );



            // console.log(prediction);
            res.status(200).json({ cartoonizedImage: prediction });
        } catch (error) {
            console.error('Error in cartoonizing image: ', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}



