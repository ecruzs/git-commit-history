import { Test, TestingModule } from '@nestjs/testing';
import { CommitsController } from './commits.controller';
import { CommitsService } from './commits.service';

describe('CommitsController', () => {
  let controller: CommitsController;
  let service: CommitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommitsController],
      providers: [
        {
          provide: CommitsService,
          useValue: {
            getCommits: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CommitsController>(CommitsController);
    service = module.get<CommitsService>(CommitsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of commits when getCommits is called', async () => {
    const result = [{}, {}, {}];
    jest
      .spyOn(service, 'getCommits')
      .mockImplementation(() => Promise.resolve(result));
    expect(await controller.getCommits({ '0': 'repo/name' })).toEqual(result);
  });

  it('should handle errors properly', async () => {
    jest
      .spyOn(service, 'getCommits')
      .mockImplementation(() =>
        Promise.reject(new Error('Error fetching commits')),
      );
    await expect(controller.getCommits({ '0': 'repo/name' })).rejects.toThrow(
      'Error fetching commits',
    );
  });
});
