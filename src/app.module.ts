import { CommitsController } from './modules/commits/commits.controller';
import { GithubService } from './modules/commits/commits.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  controllers: [CommitsController],
  providers: [GithubService],
})
export class AppModule {}
