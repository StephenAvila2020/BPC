import { Get, Route, Query } from 'tsoa';

interface PingResponse {
    message: string;
}

@Route("ping")
export default class PingController {
    @Get("/{server}")
    public async getMessage(server: string): Promise<PingResponse> {
        return {
            message: "Message: " + server
        }
    }
}