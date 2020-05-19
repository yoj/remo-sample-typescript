import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { cursorTo } from 'readline';
import axios from 'axios';
import { URLSearchParams } from 'url';

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const ENDPOINTT_TO_POST = process.env.ENDPOINTT_TO_POST;

export const hello: APIGatewayProxyHandler = async (event, _context) => {

  try {
    const paramSet = new URLSearchParams();
    paramSet.append('button', 'ch-6');

    // Authorizationヘッダーを設定
    axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}` 
    await axios.post(ENDPOINTT_TO_POST, paramSet);

    return {
      statusCode: 200
    };

  } catch(e) {
    console.log(e);
    return {
      statusCode: 500,
      body: e.error
    };
  }
}