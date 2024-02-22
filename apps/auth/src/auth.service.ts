import { Cat } from '@app/common/schemas/cat.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Cat.name) private CatModel: Model<Cat>) {}
  async getHello(): Promise<string> {
    console.log(this.CatModel);
    await this.CatModel.create({ ...this });
    return 'Hello World!';
  }
}
