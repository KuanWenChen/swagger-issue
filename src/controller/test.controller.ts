import { Body, Controller, Post } from '@nestjs/common';
import { TestDto$Partial } from './dto/test.dto';

@Controller('test')
export class TestController {
  @Post('/should-not-nullable')
  test1(@Body() testDto3PickTypeVersion: TestDto$Partial) {
    return testDto3PickTypeVersion;
  }
}
