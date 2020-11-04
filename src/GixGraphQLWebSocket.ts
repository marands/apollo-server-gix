import {APIGatewayProxyEvent} from "aws-lambda";
import {Handler} from "aws-lambda/handler";
import {APIGatewayProxyResult} from "aws-lambda";


export interface GixGraphQLWebSocketPayload {
    body: string | null;
    headers: { [name: string]: string };
    isBase64Encoded: boolean;
    httpMethod: string;
    path: string;
}

type Modify<T, R> = Omit<T, keyof R> & R;
export type GixAPIGatewayProxyEvent  = Modify<APIGatewayProxyEvent , {
    body: GixGraphQLWebSocketPayload;
}>

export type GixAPIGatewayProxyHandler = Handler<GixAPIGatewayProxyEvent, APIGatewayProxyResult>;