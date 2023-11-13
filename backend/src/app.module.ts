import { CommitsController } from './modules/commits/commits.controller';
import { CommitsService } from './modules/commits/commits.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  controllers: [CommitsController],
  providers: [CommitsService],
})
export class AppModule {}
