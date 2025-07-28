'use client';

import Link from 'next/link';

type CourseCardProps = {
    title: string;
    description: string;
    href: string;
};

export default function CourseCard({ title, description, href }: CourseCardProps) {
    return (
        <div className="bg-white/10 p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
        <p className="text-sm text-white/90 mb-4">{description}</p>
        <Link href={href} className="text-emerald-300 hover:underline text-sm">
            Lihat Detail
        </Link>
        </div>
    );
}