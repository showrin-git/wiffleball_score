/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTeamToPlayer = /* GraphQL */ `
  mutation CreateTeamToPlayer(
    $input: CreateTeamToPlayerInput!
    $condition: ModelTeamToPlayerConditionInput
  ) {
    createTeamToPlayer(input: $input, condition: $condition) {
      id
      team_id
      player_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTeamToPlayer = /* GraphQL */ `
  mutation UpdateTeamToPlayer(
    $input: UpdateTeamToPlayerInput!
    $condition: ModelTeamToPlayerConditionInput
  ) {
    updateTeamToPlayer(input: $input, condition: $condition) {
      id
      team_id
      player_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTeamToPlayer = /* GraphQL */ `
  mutation DeleteTeamToPlayer(
    $input: DeleteTeamToPlayerInput!
    $condition: ModelTeamToPlayerConditionInput
  ) {
    deleteTeamToPlayer(input: $input, condition: $condition) {
      id
      team_id
      player_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      game_id
      team_id
      player_id
      order
      position
      is_starter
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      game_id
      team_id
      player_id
      order
      position
      is_starter
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      game_id
      team_id
      player_id
      order
      position
      is_starter
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createEventMaster = /* GraphQL */ `
  mutation CreateEventMaster(
    $input: CreateEventMasterInput!
    $condition: ModelEventMasterConditionInput
  ) {
    createEventMaster(input: $input, condition: $condition) {
      id
      code
      name
      batted_ball_type
      batted_ball_direction
      base_hits
      out
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEventMaster = /* GraphQL */ `
  mutation UpdateEventMaster(
    $input: UpdateEventMasterInput!
    $condition: ModelEventMasterConditionInput
  ) {
    updateEventMaster(input: $input, condition: $condition) {
      id
      code
      name
      batted_ball_type
      batted_ball_direction
      base_hits
      out
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEventMaster = /* GraphQL */ `
  mutation DeleteEventMaster(
    $input: DeleteEventMasterInput!
    $condition: ModelEventMasterConditionInput
  ) {
    deleteEventMaster(input: $input, condition: $condition) {
      id
      code
      name
      batted_ball_type
      batted_ball_direction
      base_hits
      out
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPlay = /* GraphQL */ `
  mutation CreatePlay(
    $input: CreatePlayInput!
    $condition: ModelPlayConditionInput
  ) {
    createPlay(input: $input, condition: $condition) {
      id
      game_id
      pitcher_player_id
      batter_player_id
      event_code
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePlay = /* GraphQL */ `
  mutation UpdatePlay(
    $input: UpdatePlayInput!
    $condition: ModelPlayConditionInput
  ) {
    updatePlay(input: $input, condition: $condition) {
      id
      game_id
      pitcher_player_id
      batter_player_id
      event_code
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePlay = /* GraphQL */ `
  mutation DeletePlay(
    $input: DeletePlayInput!
    $condition: ModelPlayConditionInput
  ) {
    deletePlay(input: $input, condition: $condition) {
      id
      game_id
      pitcher_player_id
      batter_player_id
      event_code
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      preceding_team_id
      second_team_id
      stadium
      start_time
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      preceding_team_id
      second_team_id
      stadium
      start_time
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      preceding_team_id
      second_team_id
      stadium
      start_time
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      name
      number
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      name
      number
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      name
      number
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
