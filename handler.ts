import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { cursorTo } from 'readline';
import got from 'got';

const ACCESS_TOKEN = "Nv1FdHjRGh2hOeJW7QmckwbvlBSuc1liNelt2Y7_XLk.f6w9a6A1-9jaR-dMH_LToKg42Pf23ko_JaEOEh3Pikc";
const ENDPOINTT_TO_GET = "https://api.nature.global/1/devices";


export const hello: APIGatewayProxyHandler = async (event, _context) => {

  var body;
  (async () => {
    try {
      const result = await got.get(ENDPOINTT_TO_GET, {
        //body: jsonDataImported,
        //json: true,
        headers: {
          'Content-Type': "application/json;charset=utf-8",
          Authorization: `Bearer ${ACCESS_TOKEN}`
        }
      });

      body = result;
      
    } catch(e) {
      console.log(`ERROR:\n${JSON.stringify(e)}`);
    }
  })();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      result: body,
    }, null, 2),
  };
}


curl -X GET "https://api.nature.global/1/devices" -H "accept: application/json" -k --header "Authorization: Bearer Nv1FdHjRGh2hOeJW7QmckwbvlBSuc1liNelt2Y7_XLk.f6w9a6A1-9jaR-dMH_LToKg42Pf23ko_JaEOEh3Pikc"