import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/')],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
