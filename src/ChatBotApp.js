import {useState} from 'react'
const {Configuration, OpenAIApi} = require('openai')

const ChatBotApp = () => {
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });

    const openAI = new OpenAIApi(configuration);
}