import { Body, Controller, Post } from '@nestjs/common';
import { TestDto3PickTypeVersion, TestDto3ExtendVersion } from './dto/test.dto';

@Controller('test')
export class TestController {
  @Post('/pick-type-version')
  test1(@Body() testDto3PickTypeVersion: TestDto3PickTypeVersion) {
    return testDto3PickTypeVersion;
  }

  @Post('/extend-version')
  test2(@Body() testDto3ExtendVersion: TestDto3ExtendVersion) {
    return testDto3ExtendVersion;
  }
}
