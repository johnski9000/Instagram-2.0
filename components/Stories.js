import faker from "faker";
import React, { useEffect, useState } from 'react';
import Story from "./Story";
import Image from 'next/image'

function Stories() {
    const [suggestions, setSuggestions ] = useState([]);

    useEffect(() => {
        // empty dependency below means that the code with fire as soon as the website loads
        // only needs to be used once in order to populate the story data
        const suggestions = [...Array(20)].map((_,
             i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));
        setSuggestions(suggestions)
        console.log(suggestions)
    }, []);

    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll">
            {suggestions.map((profile) => (
                <Story
                key={profile.id}
                img={profile.img}
                username={profile.username}
                priority
                />
            ))}
        </div>
    );
}

export default Stories
