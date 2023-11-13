import { GithubService } from './commits.service';
export declare class CommitsController {
    private githubService;
    constructor(githubService: GithubService);
    getCommits(params: any): Promise<any>;
}
