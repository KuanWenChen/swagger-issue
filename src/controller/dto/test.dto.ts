import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class TestDto {
  @Expose()
  @ApiProperty({ example: null, description: 'should not nullable' })
  @IsNumber()
  value!: number;
}

export class TestDto$Partial extends PartialType(TestDto) {}
