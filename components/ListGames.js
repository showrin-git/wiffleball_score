import React, { useEffect, useState } from "react";
import { Amplify, graphqlOperation } from 'aws-amplify';
import { generateClient } from "aws-amplify/api";
import { listGames } from "../src/graphql/queries";
import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);
const client = generateClient()
function ListGamesComponent() {
    const [allGames, setAllGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const result = await client.graphql({
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