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

  it('should return an array of commits', async () => {
    const result = [{}, {}, {}]; // Simulación de commits
    jest.spyOn(httpService, 'get').mockImplementationOnce(() => of({
      data: result,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: { 
        url: 'http://example.com',
        method: 'get',
        headers: {}, // Añadir un objeto vacío para los headers
        // Otros campos necesarios pueden ir aquí
      },
    }));
    expect(await service.getCommits('repo/name')).toEqual(result);
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
