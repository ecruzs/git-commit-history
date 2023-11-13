import { Controller, Get, Param } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('commits')
export class CommitsController {
  constructor(private githubService: CommitsService) {}

  @Get('*')
  async getCommits(@Param() params) {
    const repo = params[0];
    return this.githubService.getCommits(repo);
  }
}
