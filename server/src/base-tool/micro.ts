import { Controller} from '@nestjs/common';
import { BaseToolService } from './service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class BaseToolMicroController {
  constructor(
    private readonly service: BaseToolService,
    ) {}
  @MessagePattern('getId')
  id() {
    return this.service.getId();
  }
  @MessagePattern('getIds')
  ids(count: number) {
    return this.service.getIds(count || 0);
  }
}
