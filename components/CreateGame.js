import React, { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { createGame } from './graphql/mutations';

import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);
const client = generateClient();

const newGame = await client.graphql({
    query: createGame,
    variables: {
        input: {
		"preceding_team_id": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"second_team_id": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
		"stadium": "Lorem ipsum dolor sit amet",
		"start_time": "1970-01-01T12:30:23.999Z"
	}
    }
});

function ListGamesComponent() {
    const [allGames, setAllGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const result = await API.graphql({
                    query: listGames
                });
                setAllGames(result.data.listGames.items);
            } catch (error) {
                console.error("Error fetching Games:", error);
            }
        };

        fetchGames();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div>
            {allGames.map(team => (
                <p key={team.id}>{team.name}</p>
            ))}
        </div>
    );
}

export default ListGamesComponent;