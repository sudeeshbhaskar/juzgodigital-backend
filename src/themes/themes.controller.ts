import { Controller,Get } from '@nestjs/common';

@Controller('themes')
export class ThemesController {

    @Get()
    getHello(): string {
      return "themes module"
    }
}
