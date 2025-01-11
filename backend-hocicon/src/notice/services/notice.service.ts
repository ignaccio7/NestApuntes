import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { NoticeCreate, Notice as NoticeDatabase } from '../interfaces/notice';
import { Notice } from '../entities/notice.entity';

@Injectable()
export class NoticeService {
  constructor(
    @InjectRepository(Notice) private noticesRepo: Repository<Notice>,
  ) {}

  findAll() {
    return this.noticesRepo.find();
  }

  findOne(id: number) {
    return this.noticesRepo.findOne({
      where: {
        id,
      },
    });
  }

  searchNotices(autor: string) {
    return this.noticesRepo.find({
      where: {
        autor: Like(`%${autor}%`),
      },
    });
  }

  // aqui deberia ser una interfaz o un DTO
  create(body: NoticeCreate) {
    const newNotice = this.noticesRepo.create(body);
    return this.noticesRepo.save(newNotice);
  }

  async update(id: number, body: NoticeDatabase) {
    const notice = await this.noticesRepo.findOne({
      where: {
        id,
      },
    });
    this.noticesRepo.merge(notice, body);
    return this.noticesRepo.save(notice);
  }

  async delete(id: number) {
    await this.noticesRepo.delete(id);
    return true;
  }
}
