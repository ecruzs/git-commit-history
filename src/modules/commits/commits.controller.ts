import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './commits.service';

@Controller('commits')
export class CommitsController {
  constructor(private githubService: GithubService) {}

  @Get('*')
  async getCommits(@Param() params) {
    const repo = params[0];
    console.log(`Controller: Getting commits for repo ${repo}`);
    return this.githubService.getCommits(repo);
  }
}
