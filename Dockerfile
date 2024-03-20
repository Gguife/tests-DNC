FROM node:18

WORKDIR /app

# Copia apenas o package.json e yarn.lock
COPY package.json yarn.lock ./

# Instala as dependências
RUN yarn install

# Copia o restante do código fonte
COPY . .

# Instala o nodemon globalmente
RUN npm install -g nodemon

# Comando padrão para iniciar a aplicação
CMD ["yarn", "start"]
