
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class IDS_DTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  count: string;
}

export class LOCALE_COMM {
  @ApiProperty()
  code: string;
  @ApiProperty()
  icon: string;
  @ApiProperty()
  desc: string;
}