import { CarrinhoService } from './../../carrinho.service';
import { IProduto, IProdutoCarrinho } from './../../produtos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/produtos.service';
import { NotificacaoService } from 'src/app/notificacao.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) { }
  
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get('id'));
    this.produto = this.produtosService.getOne(produtoId);
  }

  adicionarAoCarrinho() {
    this.notificacaoService.notificar(`O produto: ${this.produto?.descricao}, foi adicionado ao carrinho`);
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
      
    }
    this.carrinhoService.adicionarAoCarrinho(produto)
  }
}
