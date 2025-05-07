import { createLink, deleteLink } from '@/graphql/mutations';
import { listLinks } from '@/graphql/queries';
import { useEffect, useState } from 'react';
import { client } from '@/components/amplifyClient';
import { LinkEditor } from '@/components/LinkEditor';

interface Link {
    id: string;
    title: string;
    url: string;
}

// const client = generateClient();

export default function AdminDashboard() {
    const [links, setLinks] = useState<Link[]>([]);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        fetchLinks();
    }, []);

    // LIST ALL LINKS
    const fetchLinks = async () => {
        try {
            const result: any = await client.graphql({
                query: listLinks,
                authMode: 'apiKey'
            });
            setLinks(result.data.listLinks.items);

        } catch (error) {
            console.error('Error fetching links:', error);
        }
    };

    // CREATE LINKS
    const handleCreateLink = async () => {
        if (!title || !url) return;
        try {
            await client.graphql({
                query: createLink,
                variables: {
                    input: {
                        title,
                        url,
                        userID: '5a480f10-9d21-4cab-9838-d2c71012a2f7'
                    }, // <- TEMP hardcoded userID
                },
                authMode: 'apiKey'
            });
            setTitle('');
            setUrl('');
            await fetchLinks(); // Refresh list
        } catch (error) {
            console.error('Error creating link:', error);
        }
    };

    // DELETE LINKS
    const handleDeleteLink = async (id: string) => {
        try {
            await client.graphql({
                query: deleteLink,
                variables: { input: { id } },
                authMode: 'apiKey'
            });
            await fetchLinks(); // Refresh list
        } catch (error) {
            console.error('Error deleting link:', error);
        }
    };

    return (
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl font-bold mb-6">My Page</h1>

            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Link Title"
                    className="border p-2 mr-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Link URL"
                    className="border p-2 mr-2"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button onClick={handleCreateLink} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Add Link
                </button>
            </div>

            <div className="space-y-4">
                {links.map((link) => (
                    <LinkEditor
                        key={link.id}
                        link={link}
                        onUpdate={(updated: any) => {
                            setLinks((prev) =>
                                prev.map((l) => (l.id === updated.id ? updated : l))
                            );
                        }}
                        deleteLink={() => handleDeleteLink(link.id)}
                    />
                ))}
            </div>
        </div>
    );
}
