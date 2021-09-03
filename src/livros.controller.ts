import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from './livros.model';
import { LivrosService } from "./livros.service";

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {

  }

  @Get()
  async obterTodos(): Promise<Livro[]> {
    return await this.livrosService.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<Livro> {
    return await this.livrosService.obterUm(params.id);
  }

  @Post()
  async criar(@Body() livro: Livro): Promise<Livro> {
    return await this.livrosService.criar(livro);
  }

  @Put()
  async alterar(@Body() livro: Livro): Promise<[number, Livro[]]> {
    return await this.livrosService.alterar(livro);
  }

  @Delete(':id')
  async apagar(@Param() params): Promise<number> {
    return await this.livrosService.apagar(params.id);
  }
}