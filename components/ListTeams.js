import React, { useEffect, useState } from "react";
import { Amplify, graphqlOperation } from 'aws-amplify';
import { generateClient } from "aws-amplify/api";
import { listTeams } from "../src/graphql/queries";
import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);
const client = generateClient();
function ListTeamsComponent() {
    const [allTeams, setAllTeams] = useState([]);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const result = await client.graphql({
                    query: listTeams
                });
                setAllTeams(result.data.listTeams.items);
            } catch (error) {
                console.error("Error fetching teams:", error);
            }
        };

        fetchTeams();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div>
            {allTeams.map(team => (
                <p key={team.id}>{team.name}</p>
            ))}
        </div>
    );
}

export default ListTeamsComponent;