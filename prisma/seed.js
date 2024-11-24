import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: 'Fustana',
        category: 'Fustana',
        sizes: '1, 2, 3, 4, 5',
        colors: 'Black',
        price: 10.0,
        description: 'Fustana për fëmijë',
        image: 'https://www.instagram.com/p/DCmwktzxfwD/?img_index=1',
      },
      {
        name: 'Komplete',
        category: 'Komplete',
        sizes: '6, 7, 8, 9, 10',
        colors: 'Red',
        price: 5.0,
        description: 'Komplete për fëmijë',
        image: 'https://www.instagram.com/p/DCkGT7_RpgQ/',
      },
      // Add more products here
    ],
  });

  console.log('Products seeded!');
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  });
