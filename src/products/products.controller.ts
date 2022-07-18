import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  @Post()
  getHello(@Body() body: CreateProductDto): string {
    return 'product module';
  }
}
