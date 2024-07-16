import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query;

    if (!id) {
        res.status(400).json({ error: 'Missing id' });
        return;
    }
    try {
        const project = await prisma.project.findUnique({
            where: {
                id: id as string,
            },
            include: {
                images: true,
            },
        });
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: 'Error getting projects' });
    }
}