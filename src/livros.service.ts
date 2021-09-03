import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Livro } from "./livros.model";

@Injectable()
export class LivrosService {
  constructor(
    @InjectModel(Livro)
    private livroModel: typeof Livro
  ) { }

  async obterTodos(): Promise<Livro[]> {
    return await this.livroModel.findAll();
  }

  async obterUm(id: number): Promise<Livro> {
    return await this.livroModel.findByPk(id);
  }

  async criar(livro: Livro): Promise<Livro> {
    return await this.livroModel.create(livro);
  }

  async alterar(livro: Livro): Promise<[number, Livro[]]> {
    return await this.livroModel.update(livro, {
      where: { id: livro.id }
    });
  }

  async apagar(id: number): Promise<number> {
    return await this.livroModel.destroy({
      where: { id: id }
    });
  }
}