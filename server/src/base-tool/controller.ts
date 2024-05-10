import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BaseToolService } from './service';
import { IDS_DTO, LOCALE_COMM } from './class';
import { MessagePattern } from '@nestjs/microservices';

@ApiTags('基础服务')
@Controller('/base')
export class BaseToolController {
  constructor(
    private readonly service: BaseToolService,
    ) {}

  @Get('/id')
  @ApiOperation({
    summary: '获取ID'
  })
  @ApiResponse({ type: String })
  @MessagePattern('GETID')
  id() {
    return this.service.getId();
  }
  @Get('/ids')
  @ApiOperation({
    summary: '获取ID列表'
  })
  @ApiQuery({ name: 'count', type: String, description: '需要ID数量' })
  @ApiResponse({ type: [String] })
  ids(@Query() query: IDS_DTO) {
    return this.service.getIds(Number(query.count));
  }
  @Get('/locales')
  @ApiOperation({
    summary: '获取语种列表'
  })
  @ApiResponse({ type: [LOCALE_COMM] })
  locales() {
    return this.service.getLocales();
  }
}
