import Replicate from "replicate";
import fs from 'fs';
import { OpenAI } from 'openai';


export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {


            const prompt = req.body.prompt; // 假设图片以 base64 编码的形式发送
            console.log("inputText" + prompt);

            const apiKey = process.env.REPLICATE_API_TOKEN;

            const replicate = new Replicate({ token: apiKey });


            const requestPrompt = await getPrompt(prompt);

            console.log("requestPrompt" + requestPrompt);

            const prediction = await replicate.run(
                "cjwbw/damo-text-to-video:1e205ea73084bd17a0a3b43396e49ba0d6bc2e754e9283b2df49fad2dcf95755",
                {
                    input: {
                        fps: 8,
                        prompt: requestPrompt,
                        num_frames: 50,
                        num_inference_steps: 50
                    }
                }
            );



            console.log(prediction);
            res.status(200).json({ videoUrl: prediction });
        } catch (error) {
            console.error('Error in sora tech ', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}



async function getPrompt(prompt) {
    // 假设这是调用翻译API的函数
    // 返回翻译后的英文文本
    // 这里需要根据实际使用的API来实现
    if (isEnglish(prompt)) {
        console.log("is English " + prompt);
        return prompt;
    } else {
        console.log("is not English " + prompt);
        return await translate(prompt);
    }
}


function isEnglish(text) {
    return /^[A-Za-z0-9 .,!?'"-]+$/.test(text);
}

async function translate(prompt) {
    const key = process.env.OPENAI_API_KEY;

    const inputText = prompt;

    console.log("translate " + inputText);
    const openai = new OpenAI({ apiKey: key });


    const response = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct", // 或者使用 gpt-3.5-turbo，根据您的需求选择模型
        prompt: `请将以下文本翻译成英文：${inputText}`, // 直接将问题作为 prompt
        temperature: 0.5,
        max_tokens: 100,
    });
    console.log("resp " + response);


    console.log("prompt" + prompt + "; after translate" + response.choices[0].text.trim())
    return response.choices[0].text.trim();
}
