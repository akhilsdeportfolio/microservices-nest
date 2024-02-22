import { Cat } from '@app/common/schemas/cat.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}
  async getHello(): Promise<string> {
    console.log(this.catModel.base);
    this.catModel.create({ ...this, objData: { date: Date.UTC(1030) } });
    return 'Hello World!';
  }
}
