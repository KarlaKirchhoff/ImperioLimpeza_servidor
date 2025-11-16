import type { Request, Response } from 'express'; 
import express from 'express'; // importa só os tipos corretamente
import cors from 'cors';

import router from './src/routes/index';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use(cors());

// Conteúdo do arquivo Receipt.tsx que será baixado
const receiptTsx = `teste de arquivo`;

app.get('/', (_req: Request, res: Response) => {
  res.send(`Servidor TSX download

Endpoints:
- GET /download/receipt  -> baixa o arquivo Receipt.tsx`);
});

app.get('/download', (_req: Request, res: Response) => {
  const filename = 'Receipt.txt';
  // Indica ao browser que é um anexo para download
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  // Content-Type neutro para forçar download; pode ser alterado se quiser fornecer outro mime
  res.setHeader('Content-Type', 'application/octet-stream');
  res.send(receiptTsx);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${PORT}`);
});

// Observações:
// - Este servidor entrega um arquivo .tsx em memória. Se preferir, você pode gravar Receipt.tsx no disco e usar res.download(path) ou res.sendFile(path).
// - O arquivo exporta um componente React funcional (padrão) que pode ser importado e renderizado em outro projeto React/Next/Expo Web.
// - Ajuste a interface ReceiptProps conforme a necessidade do seu app consumidor.
