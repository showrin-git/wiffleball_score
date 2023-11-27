/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTeamToPlayer = /* GraphQL */ `
  query GetTeamToPlayer($id: ID!) {
    getTeamToPlayer(id: $id) {
      id
      team_id
      player_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTeamToPlayers = /* GraphQL */ `
  query ListTeamToPlayers(
    $filter: ModelTeamToPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamToPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        team_id
        player_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getEventMaster = /* GraphQL */ `
  query GetEventMaster($id: ID!) {
    getEventMaster(id: $id) {
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
export const listEventMasters = /* GraphQL */ `
  query ListEventMasters(
    $filter: ModelEventMasterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventMasters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPlay = /* GraphQL */ `
  query GetPlay($id: ID!) {
    getPlay(id: $id) {
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
export const listPlays = /* GraphQL */ `
  query ListPlays(
    $filter: ModelPlayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        game_id
        pitcher_player_id
        batter_player_id
        event_code
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        preceding_team_id
        second_team_id
        stadium
        start_time
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      name
      number
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        number
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
