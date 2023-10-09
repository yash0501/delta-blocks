import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 1, name: 'Naruto', rank: 'Genin', weapon: 'Shuriken' },
    { id: 2, name: 'Sasuke', rank: 'Genin', weapon: 'Kunai' },
  ];

  getNinjas(weapon?: 'Shuriken' | 'Kunai') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }

  getNinja(id: Number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    if (!ninja) {
      throw new Error('Ninja not found');
    }
    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    const newNinja = {
      id: this.ninjas.length + 1,
      ...createNinjaDto,
    };
    this.ninjas.push(newNinja);
    return newNinja;
  }

  updateNinja(UpdateNinjaDto: UpdateNinjaDto, id: Number) {
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id === id) {
        return { ...ninja, ...UpdateNinjaDto };
      }
      return ninja;
    });
    return this.getNinja(id);
  }

  deleteNinja(id: Number) {
    const ninja = this.getNinja(id);
    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);
    return ninja;
  }
}
