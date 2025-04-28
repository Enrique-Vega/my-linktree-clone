import React from 'react'

interface LinkCardProps {
    title: string;
    url: string;
}

export const LinkCard = ({ title, url }: LinkCardProps) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="
                bg-white 
                text-indigo-700 
                font-semibold 
                py-4 px-6 
                rounded-2xl 
                shadow-md hover:scale-105 
                hover:shadow-lg 
                transition-all 
                duration-300 
                text-center
                "
        >
            {title}
        </a>
    )
}