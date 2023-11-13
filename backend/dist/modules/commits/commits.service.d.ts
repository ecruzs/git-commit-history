import { HttpService } from '@nestjs/axios';
export declare class CommitsService {
    private httpService;
    constructor(httpService: HttpService);
    getCommits(repo: string): Promise<any>;
}
