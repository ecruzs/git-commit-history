import { CommitsService } from './commits.service';
export declare class CommitsController {
    private githubService;
    constructor(githubService: CommitsService);
    getCommits(params: any): Promise<any>;
}
