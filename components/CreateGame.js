import React, { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { createGame } from '../src/graphql/mutations';
import { VStack, FormControl, Input, Button } from "native-base";
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

function CreateGameComponent() {
    const [formData, setData] = React.useState({});
    const [errors, setErrors] = React.useState({});

    const validate = () => {
        if (formData.name === undefined) {
          setErrors({ ...errors,
            name: 'Name is required'
          });
          return false;
        } else if (formData.name.length < 3) {
          setErrors({ ...errors,
            name: 'Name is too short'
          });
          return false;
        }
    
        return true;
      };
    
    const onSubmit = () => {
    validate() ? console.log('Submitted'): console.log('Validation Failed');
    };

    return <VStack width="90%" mx="3" maxW="300px">
        <FormControl isRequired isInvalid={'name' in errors}>
        <FormControl.Label _text={{
        bold: true
        }}>Name</FormControl.Label>
        <Input placeholder="John" onChangeText={value => setData({ ...formData,
            name: value
            })}/>
        {'name' in errors ? <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> : <FormControl.HelperText>
            Name should contain atleast 3 character.
            </FormControl.HelperText>}
        <FormControl.Label _text={{
        bold: true
        }}>先攻チーム</FormControl.Label>
        <Input placeholder="John" onChangeText={value => setData({ ...formData,
            home_team: value
            })}/>
        {'home_team' in errors ? <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> : <FormControl.HelperText>
            Name should contain atleast 3 character.
            </FormControl.HelperText>}
        <FormControl.Label _text={{
        bold: true
        }}>後攻チーム</FormControl.Label>
        <Input placeholder="John" onChangeText={value => setData({ ...formData,
            away_team: value
            })}/>
        {'away_team' in errors ? <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> : <FormControl.HelperText>
            Name should contain atleast 3 character.
            </FormControl.HelperText>}
        </FormControl>
        <Button onPress={onSubmit} mt="5" colorScheme="cyan">
        Submit
        </Button>
    </VStack>;
}

export default CreateGameComponent;