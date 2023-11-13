import { HttpService } from '@nestjs/axios';
export declare class GithubService {
    private httpService;
    constructor(httpService: HttpService);
    getCommits(repo: string): Promise<any>;
}
