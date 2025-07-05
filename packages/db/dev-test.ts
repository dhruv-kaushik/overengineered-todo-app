import prisma from './src/client';

async function main() {
  const users = await prisma.user.findMany();
  console.log(users);
}

main();
