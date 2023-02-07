import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    create(createArticleDto: CreateArticleDto): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    findDrafts(): import(".prisma/client").PrismaPromise<import(".prisma/client").Article[]>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Article[]>;
    findOne(id: number): Promise<import(".prisma/client").Article>;
    update(id: number, updateArticleDto: UpdateArticleDto): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
}
