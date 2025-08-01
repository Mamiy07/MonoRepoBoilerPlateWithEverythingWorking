step 1 : git clone https://github.com/Mamiy07/MonoRepoBoilerPlateWithEverythingWorking.git
step 2 : npm install in root folder
step 3 : create .env in packages/db folder and enter your db url
step 4 : and use npx prisma init in (db folder) 
step 5 : and now do npx prisma migrate dev --name Init (db folder)
step 6 : npx prisma generate (do in db folder only)
step 7 : npm run dev in main folder
