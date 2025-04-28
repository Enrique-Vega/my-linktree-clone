import { useRouter } from 'next/router';
import { LinkCard } from '@/components/LinkCard';

export default function UsernamePage() {
    const router = useRouter();
    const { username } = router.query;

    // Fake links for now
    const links = [
        { title: "My Website", url: "https://example.com" },
        { title: "Instagram", url: "https://instagram.com" },
        { title: "Twitter", url: "https://twitter.com" },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-purple-600 to-indigo-700 p-6 pt-20">
            {/* Profile Picture */}
            <div className="w-28 h-28 rounded-full bg-white overflow-hidden mb-4 shadow-lg">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Username */}
            <h1 className="text-3xl font-extrabold text-white mb-1">@{username}</h1>

            {/* Bio */}
            <p className="text-white text-center max-w-md mb-8 opacity-80">
                Welcome to my link page! 🌟 Stay connected with me below.
            </p>

            {/* Links */}
            <div className="flex flex-col gap-5 w-full max-w-md">
                {links.map((link, index) => (
                    <LinkCard key={index} title={link.title} url={link.url} />
                ))}
            </div>
        </div>
    );
}
