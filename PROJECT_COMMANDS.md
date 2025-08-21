node src/index.js
source .
source .env
node src/index.js
node --watch src/index.js
npm run dev
git add .
git commit -m "added basic express functionalities"
git remote add origin https://github.com/DecodeDebangi/Base-Node-project-Template.git
git branch -M main
git push -u origin main
npm i sequelize
npm i mysql2
npm i sequelize-cli
cd src && npx sequelize init
