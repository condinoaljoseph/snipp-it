import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const feed = await prisma.post.findMany({
		where: { published: true },
		include: {
			author: {
				select: { name: true, image: true }
			}
		}
	});

	const users = await prisma.user.findMany({
		take: 10,
		select: { id: true, name: true, email: true, image: true }
	});

	res.json({ feed, users });
}
