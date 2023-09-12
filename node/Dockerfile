FROM node:15

WORKDIR /usr/src/app/

COPY package.json /usr/src/app/
RUN npm install --quiet

COPY . /usr/src/app/

EXPOSE 3000

CMD /bin/bash -c 'npm install; node index.js'
