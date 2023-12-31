import { Test, TestingModule } from '@nestjs/testing';
import { CommitsService } from './commits.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs';

describe('CommitsService', () => {
  let service: CommitsService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [CommitsService],
    }).compile();

    service = module.get<CommitsService>(CommitsService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call HttpService.get with the correct URL', async () => {
    const repo = 'nestjs/nest';
    const expectedUrl = `https://api.github.com/repos/${repo}/commits`;

    jest
      .spyOn(httpService, 'get')
      .mockImplementation(() => of({} as AxiosResponse));

    await service.getCommits(repo);

    expect(httpService.get).toHaveBeenCalledWith(expectedUrl);
  });

  it('should handle errors when the API call fails', async () => {
    jest.spyOn(httpService, 'get').mockImplementationOnce(() => {
      throw new Error('API call failed');
    });
    await expect(service.getCommits('repo/name')).rejects.toThrow(
      'API call failed',
    );
  });
});
