import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const project = await prisma.project.findMany();
        res.status(200).json(project);
      } catch (error) {
        res.status(500).json({ error: 'Error getting projects' });
      }
      break;
    case 'POST':
      try {
        const project = await prisma.project.create({
          data: {
            name: req.body.name,
            projectDate: req.body.projectDate,
            thumbnail: req.body.thumbnail,
            description: req.body.description,
          }
        });
        res.status(201).json(project);
      } catch (error) {
        res.status(500).json({ error: 'Error creating project' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}  