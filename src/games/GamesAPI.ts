import { useMutation, useQueryClient } from "react-query";
import { useAPI } from "../shared/useAPI";

export const FREE = "FREE";
export const NO_MOVE = "NO_MOVE";
export const NO_ZOOM = "NO_ZOOM";
export const NO_MOVE_NO_ZOOM = "NO_MOVE_NO_ZOOM";
export const NO_MOVE_NO_PAN_NO_ZOOM = "NO_MOVE_NO_PAN_NO_ZOOM";

export type MovementSetting =
  | typeof FREE
  | typeof NO_MOVE
  | typeof NO_ZOOM
  | typeof NO_MOVE_NO_ZOOM
  | typeof NO_MOVE_NO_PAN_NO_ZOOM;

export const ALL_MOVEMENT_SETTINGS: MovementSetting[] = [
  FREE,
  NO_MOVE,
  NO_ZOOM,
  NO_MOVE_NO_ZOOM,
  NO_MOVE_NO_PAN_NO_ZOOM,
];

export const MovementSettingLabel: { [key in MovementSetting]: string } = {
  [FREE]: "Free",
  [NO_MOVE]: "No move",
  [NO_ZOOM]: "No zoom",
  [NO_MOVE_NO_ZOOM]: "No move, no zoom",
  [NO_MOVE_NO_PAN_NO_ZOOM]: "No move, no pan, no zoom",
};

export const MovementSettingDescription: {
  [key in MovementSetting]: string;
} = {
  [FREE]: "Moving, panning and zooming are allowed.",
  [NO_MOVE]: "You can't move around the map but you can still pan and zoom.",
  [NO_ZOOM]: "You can't zoom but you can still move and pan.",
  [NO_MOVE_NO_ZOOM]: "You can't move or zoom. Only panning is allowed.",
  [NO_MOVE_NO_PAN_NO_ZOOM]: "No movement at all. You can't move, pan or move.",
};

export type Game = {
  _id?: string;
  rounds: number;
  duration: {
    minimum: number;
    maximum: number;
  };
  movementSettings: MovementSetting[];
};

export const useCreateGameMutation = () => {
  const api = useAPI();
  const queryClient = useQueryClient();
  return useMutation<Game, unknown, Game>(
    async (json) => {
      return api.post(`games`, { json }).json();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("games");
      },
    }
  );
};
