import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnalisisService } from './analisis.service';
import { CreateAnalisiDto } from './dto/create-analisi.dto';
import { UpdateAnalisiDto } from './dto/update-analisi.dto';

@Controller('analisis')
export class AnalisisController {
  constructor(private readonly analisisService: AnalisisService) {}

  @Post()
  create(@Body() createAnalisiDto: CreateAnalisiDto) {
    return this.analisisService.create(createAnalisiDto);
  }

  @Get()
  findAll() {
    return this.analisisService.findAll();
  }

  @Get(':id')
  findAllAnalisis(@Param('id') id: string) {
    return this.analisisService.findAllAnalisis(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnalisiDto: UpdateAnalisiDto) {
    return this.analisisService.update(+id, updateAnalisiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.analisisService.remove(+id);
  }
}
