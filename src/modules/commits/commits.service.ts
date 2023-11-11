import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GithubService {
  constructor(private httpService: HttpService) {}

  async getCommits(repo: string) {
    console.log(`Service: Getting commits for repo ${repo}`);
    const url = `https://api.github.com/repos/${repo}/commits`;
    // Si necesitas autenticación, agrega headers o parámetros aquí
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }
}
