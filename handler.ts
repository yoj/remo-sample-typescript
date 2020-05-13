import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { cursorTo } from 'readline';
import got from 'got';

const ACCESS_TOKEN = "Nv1FdHjRGh2hOeJW7QmckwbvlBSuc1liNelt2Y7_XLk.f6w9a6A1-9jaR-dMH_LToKg42Pf23ko_JaEOEh3Pikc";
const ENDPOINTT_TO_GET = "https://api.nature.global/1/devices";


export const hello: APIGatewayProxyHandler = async (event, _context) => {

  //(async () => {
  try {
    //const result = await got.get(ENDPOINTT_TO_GET, {
    const result = await got.get(ENDPOINTT_TO_GET, {
      //body: jsonDataImported,
      //json: true,
      headers: {
        'Content-Type': "application/json;charset=utf-8",
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });

    console.log(result.body);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: result.body,
      }, null, 2),
    };

  } catch(e) {
    console.log("error!!!!");

    return {
      statusCode: 500,
      body: "error"
    };
  }
  //})();
}