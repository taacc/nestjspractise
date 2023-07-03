import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ContentModule } from './modules/content/content.module';
@Module({
  imports: [UserModule, ContentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
