/** @jsxImportSource @emotion/react */
import { FormProvider, useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import "twin.macro";
import { Checkbox } from "../shared/Checkbox";
import { FormGroup, InlineFormGroup } from "../shared/FormGroup";
import { HelperText } from "../shared/HelperText";
import { Input, NumberInput } from "../shared/Input";
import { GroupLabelBase, Label } from "../shared/Label";
import { Panel, PanelContent } from "../shared/Panel";
import { PrimaryButton } from "../shared/PrimaryButton";
import { Spinner } from "../shared/Spinner";
import {
  ALL_MOVEMENT_SETTINGS,
  MovementSetting,
  MovementSettingDescription,
  MovementSettingLabel,
  useCreateGameMutation,
} from "./GamesAPI";

type FormattedDuration = `${string}:${string}`;

type NewGameFormProps = {
  rounds: number;
  minimumDuration: FormattedDuration;
  maximumDuration: FormattedDuration;
  movementSettings: { [key in MovementSetting]: boolean };
};

const convertFormattedDurationToSeconds = (value: FormattedDuration) => {
  const [formattedMinutes, formattedSeconds] = value.split(":");
  const minutes = Number(formattedMinutes);
  const seconds = Number(formattedSeconds);
  return minutes * 60 + seconds;
};

const NewGameScreen = () => {
  const formProps = useForm<NewGameFormProps>();
  const { handleSubmit } = formProps;

  const {
    isLoading,
    mutate: createGame,
    data: createdGame,
  } = useCreateGameMutation();

  const onSubmit = (data: NewGameFormProps) => {
    // Format movements
    const movementSettings = Object.entries(data.movementSettings)
      .filter(([, enabled]) => enabled)
      .map(([movementSetting]) => movementSetting as MovementSetting);

    // Format durations
    const minimumDuration = convertFormattedDurationToSeconds(
      data.minimumDuration
    );
    const maximumDuration = convertFormattedDurationToSeconds(
      data.maximumDuration
    );

    // Create API payload
    const game = {
      rounds: data.rounds,
      minimumDuration,
      maximumDuration,
      movementSettings,
    };

    // Create game on API, on success we will redirect to the created game
    createGame(game);
  };

  return (
    <main tw="lg:col-span-9 xl:col-span-6">
      {createdGame !== undefined && <Redirect to={`/g/${createdGame._id}`} />}
      <Panel>
        <PanelContent>
          <FormProvider {...formProps}>
            <form onSubmit={handleSubmit(onSubmit)} tw="space-y-6">
              <div>
                <h1 tw="text-lg leading-6 font-medium text-gray-900 dark:(text-white)">
                  Game settings
                </h1>
                <p tw="mt-1 text-sm text-gray-500 dark:(text-gray-400)">
                  Let’s get started by filling in the information below to
                  create your new game.
                </p>
              </div>

              <FormGroup>
                <Label>Rounds</Label>
                <NumberInput
                  name="rounds"
                  defaultValue={5}
                  min={0}
                  step={1}
                  required
                />
              </FormGroup>

              <fieldset>
                <GroupLabelBase as="legend">Duration settings</GroupLabelBase>
                <div tw="rounded-md shadow-sm flex -space-x-px">
                  <FormGroup tw="w-1/2 flex-1 min-w-0">
                    <Label tw="sr-only">Minimum</Label>
                    <Input
                      name="minimumDuration"
                      defaultValue="00:40"
                      pattern="\d\d:\d\d"
                      required
                      placeholder="Minimum"
                      tw="shadow-none rounded-r-none relative focus:(z-10)"
                    />
                  </FormGroup>
                  <FormGroup tw="flex-1 min-w-0">
                    <Label tw="sr-only">Maximum</Label>
                    <Input
                      name="maximumDuration"
                      defaultValue="05:00"
                      pattern="\d\d:\d\d"
                      required
                      placeholder="Maximum"
                      tw="shadow-none rounded-l-none relative focus:(z-10)"
                    />
                  </FormGroup>
                </div>
              </fieldset>

              <div role="group" aria-labelledby="label-email">
                <GroupLabelBase id="label-email">
                  Movement settings
                </GroupLabelBase>
                <div tw="mt-4 max-w-lg space-y-4">
                  {ALL_MOVEMENT_SETTINGS.map((movementSetting) => (
                    <InlineFormGroup key={movementSetting}>
                      <div tw="flex items-center h-5">
                        <Checkbox
                          name={`movementSettings.${movementSetting}`}
                          defaultChecked
                        />
                      </div>
                      <div>
                        <Label>{MovementSettingLabel[movementSetting]}</Label>
                        <HelperText>
                          {MovementSettingDescription[movementSetting]}
                        </HelperText>
                      </div>
                    </InlineFormGroup>
                  ))}
                </div>
              </div>

              <div tw="flex justify-end">
                <PrimaryButton type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Spinner />
                      Creating game...
                    </>
                  ) : (
                    "Start game"
                  )}
                </PrimaryButton>
              </div>
            </form>
          </FormProvider>
        </PanelContent>
      </Panel>
    </main>
  );
};

export default NewGameScreen;
