import { Module } from '@nestjs/common';
import { NoticeService } from './services/notice.service';
import { NoticeController } from './controllers/notice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notice } from './entities/notice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notice])],
  providers: [NoticeService],
  controllers: [NoticeController],
})
export class NoticeModule {}
