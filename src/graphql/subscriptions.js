/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeamToPlayer = /* GraphQL */ `
  subscription OnCreateTeamToPlayer(
    $filter: ModelSubscriptionTeamToPlayerFilterInput
  ) {
    onCreateTeamToPlayer(filter: $filter) {
      id
      team_id
      player_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTeamToPlayer = /* GraphQL */ `
  subscription OnUpdateTeamToPlayer(
    $filter: ModelSubscriptionTeamToPlayerFilterInput
  ) {
    onUpdateTeamToPlayer(filter: $filter) {
      id
      team_id
      player_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTeamToPlayer = /* GraphQL */ `
  subscription OnDeleteTeamToPlayer(
    $filter: ModelSubscriptionTeamToPlayerFilterInput
  ) {
    onDeleteTeamToPlayer(filter: $filter) {
      id
      team_id
      player_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateEventMaster = /* GraphQL */ `
  subscription OnCreateEventMaster(
    $filter: ModelSubscriptionEventMasterFilterInput
  ) {
    onCreateEventMaster(filter: $filter) {
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
export const onUpdateEventMaster = /* GraphQL */ `
  subscription OnUpdateEventMaster(
    $filter: ModelSubscriptionEventMasterFilterInput
  ) {
    onUpdateEventMaster(filter: $filter) {
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
export const onDeleteEventMaster = /* GraphQL */ `
  subscription OnDeleteEventMaster(
    $filter: ModelSubscriptionEventMasterFilterInput
  ) {
    onDeleteEventMaster(filter: $filter) {
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
export const onCreatePlay = /* GraphQL */ `
  subscription OnCreatePlay($filter: ModelSubscriptionPlayFilterInput) {
    onCreatePlay(filter: $filter) {
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
export const onUpdatePlay = /* GraphQL */ `
  subscription OnUpdatePlay($filter: ModelSubscriptionPlayFilterInput) {
    onUpdatePlay(filter: $filter) {
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
export const onDeletePlay = /* GraphQL */ `
  subscription OnDeletePlay($filter: ModelSubscriptionPlayFilterInput) {
    onDeletePlay(filter: $filter) {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame($filter: ModelSubscriptionGameFilterInput) {
    onCreateGame(filter: $filter) {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame($filter: ModelSubscriptionGameFilterInput) {
    onUpdateGame(filter: $filter) {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame($filter: ModelSubscriptionGameFilterInput) {
    onDeleteGame(filter: $filter) {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onCreatePlayer(filter: $filter) {
      id
      name
      number
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onUpdatePlayer(filter: $filter) {
      id
      name
      number
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onDeletePlayer(filter: $filter) {
      id
      name
      number
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onCreateTeam(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onUpdateTeam(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($filter: ModelSubscriptionTeamFilterInput) {
    onDeleteTeam(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
