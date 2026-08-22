# Integração da Landing Page com SDR V1

## O que já está preparado
- `sdr-bridge.js` captura UTM, GCLID e FBCLID.
- A atribuição é guardada em `sessionStorage`.
- Os CTAs do WhatsApp recebem a origem/campanha no texto enviado.
- Nenhuma chave secreta é exposta.
- O número único da V1 permanece +55 51 98966-7702.

## Ativação no index.html
Adicionar antes de `</body>`:

```html
<script src="./sdr-bridge.js" defer></script>
```

## Exemplo de rastreamento
`?utm_source=google&utm_medium=cpc&utm_campaign=conta_pj&utm_content=anuncio_01`

O WhatsApp receberá o texto original seguido da atribuição, permitindo que o SDR/CRM identifique a origem do contato.

## Próxima camada
Quando o endpoint público do backend V1 estiver disponível, o bridge pode enviar o evento de lead para a API antes de abrir o WhatsApp. Não colocar token, service-role key, segredo Meta ou segredo OpenAI no front-end.
