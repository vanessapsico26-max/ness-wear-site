"use client";

import React, { useState } from "react";

const produtos = [
  { nome: "Top Lara", preco: 139, tamanhos: ["P", "M", "G"] },
  { nome: "Top Bella", preco: 139, tamanhos: ["P", "M", "G"] },
  { nome: "Top Lume", preco: 159, tamanhos: ["P", "M", "G"] },
  { nome: "Legging Basic", preco: 219, tamanhos: ["P", "M", "G", "GG"] },
  { nome: "Short Basic", preco: 179, tamanhos: ["P", "M", "G"] },
  { nome: "Macacão Long", preco: 359, tamanhos: ["P", "M", "G"] },
  { nome: "Blusa Flow", preco: 149, tamanhos: ["Único"] },
];

export default function Page() {
  const [carrinho, setCarrinho] = useState<any[]>([]);

  function adicionarProduto(produto: any, tamanho: string) {
    setCarrinho([...carrinho, { ...produto, tamanho }]);
  }

  const total = carrinho.reduce((soma, item) => soma + item.preco, 0);

  function linkWhatsApp() {
    const mensagem =
      "Olá, NESS WEAR! Quero fazer um pedido:%0A%0A" +
      carrinho
        .map((item) => `• ${item.nome} | Tam. ${item.tamanho} | R$ ${item.preco}`)
        .join("%0A") +
      `%0A%0ATotal: R$ ${total}%0A%0APode me confirmar disponibilidade, cores e pagamento?`;

    return `https://wa.me/5511999999999?text=${mensagem}`;
  }

  return (
    <main className="site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Poppins:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        body {
          margin: 0;
          font-family: 'Montserrat', sans-serif;
          background: #f6efe8;
          color: #151313;
        }

        .hero {
          min-height: 100vh;
          background: radial-gradient(circle at center, #1b1b1b 0%, #050505 65%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px;
        }

        .hero img {
          max-width: 520px;
          width: 90%;
        }

        .concept {
          padding: 90px 24px;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .concept h1 {
          font-family: 'Poppins', sans-serif;
          font-size: 42px;
          font-weight: 300;
          line-height: 1.25;
        }

        .concept p {
          font-size: 18px;
          color: #5f5953;
          line-height: 1.8;
        }

        .shop {
          padding: 70px 24px;
          max-width: 1180px;
          margin: 0 auto;
        }

        .shop h2 {
          font-family: 'Poppins', sans-serif;
          font-size: 36px;
          font-weight: 300;
          margin-bottom: 8px;
        }

        .subtitle {
          color: #7a7168;
          margin-bottom: 32px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 22px;
        }

        .card {
          background: #fff;
          border-radius: 28px;
          padding: 26px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
        }

        .card h3 {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          font-size: 22px;
        }

        .price {
          font-size: 26px;
          font-weight: 500;
        }

        .size-btn {
          border: 1px solid #151313;
          background: #151313;
          color: white;
          border-radius: 999px;
          padding: 10px 15px;
          margin-right: 8px;
          margin-bottom: 8px;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
        }

        .cart {
          background: #151313;
          color: white;
          padding: 70px 24px;
          text-align: center;
        }

        .cart h2 {
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
          font-size: 34px;
        }

        .whats {
          background: white;
          color: black;
          border: none;
          padding: 17px 32px;
          border-radius: 999px;
          cursor: pointer;
          font-weight: 600;
          letter-spacing: 1px;
          margin-top: 20px;
        }
      `}</style>

      <section className="hero">
        <img src="/logo-ness.jpg" alt="NESS WEAR" />
      </section>

      <section className="concept">
        <h1>Conforto que acompanha seu movimento. Estilo que sustenta sua confiança.</h1>
        <p>
          NESS WEAR é sobre leveza, movimento e confiança. Peças que acompanham
          seu corpo, sua rotina e sua melhor versão — todos os dias.
        </p>
      </section>

      <section className="shop">
        <h2>Primeiro drop</h2>
        <p className="subtitle">Peças selecionadas • Estoque limitado</p>

        <div className="grid">
          {produtos.map((produto) => (
            <div className="card" key={produto.nome}>
              <h3>{produto.nome}</h3>
              <p className="price">R$ {produto.preco}</p>
              <p>Tamanho:</p>

              {produto.tamanhos.map((tamanho) => (
                <button
                  className="size-btn"
                  key={tamanho}
                  onClick={() => adicionarProduto(produto, tamanho)}
                >
                  {tamanho}
                </button>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="cart">
        <h2>Seu pedido</h2>

        {carrinho.length === 0 && <p>Nenhum produto selecionado ainda.</p>}

        {carrinho.map((item, index) => (
          <p key={index}>
            {item.nome} | Tam. {item.tamanho} | R$ {item.preco}
          </p>
        ))}

        <h3>Total: R$ {total}</h3>

        {carrinho.length > 0 && (
          <a href={linkWhatsApp()} target="_blank">
            <button className="whats">Quero meu look agora</button>
          </a>
        )}
      </section>
    </main>
  );
}
