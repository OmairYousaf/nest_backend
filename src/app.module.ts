import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [ItemModule, ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
