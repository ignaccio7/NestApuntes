import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { NoticeService } from '../services/notice.service';
import { Notice, NoticeCreate } from '../interfaces/notice';

@Controller('notice')
export class NoticeController {
  constructor(private noticeService: NoticeService) {}
  //   @Get()
  //   getAll() {
  //     return this.noticeService.findAll();
  //   }

  @Get()
  getAll(@Query('query') query: string) {
    if (query !== '') {
      return this.noticeService.searchNotices(query);
    } else {
      return this.noticeService.findAll();
    }
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.noticeService.findOne(id);
  }

  @Post()
  create(@Body() body: NoticeCreate) {
    return this.noticeService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: Notice) {
    return this.noticeService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.noticeService.delete(id);
  }
}
