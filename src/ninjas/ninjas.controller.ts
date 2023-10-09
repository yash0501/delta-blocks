import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas') // ninjas will be present as prefix in front of every request
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Get()
  getNinjas(@Query('weapon') weapon: 'Shuriken' | 'Kunai') {
    // const service = new NinjasService();

    return this.ninjasService.getNinjas(weapon);
  }

  @Get(':id')
  getOneNinja(@Query('id') id: Number) {
    try {
      return this.ninjasService.getNinja(Number(id));
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.createNinja(createNinjaDto);
  }

  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjasService.updateNinja(updateNinjaDto, Number(id));
  }

  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return {
      a: id,
    };
  }
}

// GET, POST, PUT, DELETE
