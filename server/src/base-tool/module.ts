import { Module } from '@nestjs/common';
import { BaseToolController } from './controller';
import { BaseToolService } from './service';
import { BaseToolMicroController } from './micro';

@Module({
  imports: [],
  controllers: [BaseToolController, BaseToolMicroController],
  providers: [BaseToolService]
})
export class BaseToolModule {}