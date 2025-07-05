import prisma from './src/client';

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      name: 'Test User',
    },
  });

  await prisma.task.createMany({
    data: [
      {
        title: 'First Task',
        userId: user.id,
        priority: 1,
      },
      {
        title: 'Second Task',
        userId: user.id,
        priority: 2,
      },
    ],
  });

  console.log('Seed complete');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(() => prisma.$disconnect());
