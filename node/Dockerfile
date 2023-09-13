# Use a imagem Node.js
FROM node:15

# Defina o diretório de trabalho
WORKDIR /usr/src/app/

# Copie os arquivos do projeto para o contêiner
COPY package.json /usr/src/app/
RUN npm install --quiet

COPY . /usr/src/app/

# Copie o script wait-for-it.sh para o contêiner
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /usr/local/bin/wait-for-it.sh
RUN chmod +x /usr/local/bin/wait-for-it.sh

# Exponha a porta 3000
EXPOSE 3000

# Comando para esperar pelo MySQL e iniciar o aplicativo
CMD ["wait-for-it.sh", "db:3306", "--", "/bin/bash", "-c", "npm install && node index.js"]
