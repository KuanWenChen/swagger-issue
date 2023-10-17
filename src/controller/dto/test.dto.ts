import { PickType } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';

export class TestDto1 {
  @Expose()
  @Transform(() => {
    console.log('TestDto1 Transform');
    return 1;
  })
  version!: number;
}

export class TestDto2 extends PickType(TestDto1, ['version']) {
  @Transform(() => {
    console.log('TestDto2 Transform');
    return 2;
  })
  version!: number;
}

export class TestDto3PickTypeVersion extends PickType(TestDto2, ['version']) {
  @Transform(() => {
    console.log('TestDto3 Transform');
    return 3;
  })
  version!: number;
}

export class TestDto3ExtendVersion extends TestDto2 {
  @Transform(() => {
    console.log('TestDto3 Transform');
    return 3;
  })
  version!: number;
}
