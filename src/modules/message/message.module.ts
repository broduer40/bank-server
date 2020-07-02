import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  MessageRepository,
  MessageTemplateRepository,
  MessageKeyRepository,
} from './repositories';
import { MessageService } from './services/message.service';
import { MessageController } from './controllers/message.controller';
import { MessageKeyService } from './services/message-key.service';
import { UserModule } from 'modules/user/user.module';
import { MessageTemplateService } from './services';
import { LanguageModule } from 'modules/language/language.module';

@Module({
  imports: [
    UserModule,
    LanguageModule,
    TypeOrmModule.forFeature([
      MessageRepository,
      MessageTemplateRepository,
      MessageKeyRepository,
    ]),
  ],
  controllers: [MessageController],
  exports: [MessageService, MessageKeyService, MessageTemplateService],
  providers: [MessageService, MessageKeyService, MessageTemplateService],
})
export class MessageModule {}