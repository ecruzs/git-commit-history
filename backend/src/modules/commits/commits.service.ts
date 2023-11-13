import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GithubService {
  constructor(private httpService: HttpService) {}

  async getCommits(repo: string) {
    const url = `https://api.github.com/repos/${repo}/commits`;
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }
}
