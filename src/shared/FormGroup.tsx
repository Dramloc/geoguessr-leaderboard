/** @jsxImportSource @emotion/react */
import { createContext, useContext } from "react";
import "twin.macro";
import { useId } from "./useId";

const FormGroupContext = createContext<{ id: string } | null>(null);

/**
 * Form group component exposing a unique `id` using context to its child components.
 * This will also wrap children in a `div` element.
 * Child components can use the `useFormId()` hook to access the unique id value.
 * See `Label` and `Input` for usage example.
 * @example
 * <FormGroup>
 *   <Label>Text field</Label>
 *   <Input name="textField" />
 * </FormGroup>
 */
export const FormGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const id = useId();
  return (
    <FormGroupContext.Provider value={{ id }}>
      <div tw="space-y-1" {...props} />
    </FormGroupContext.Provider>
  );
};

export const InlineFormGroup: typeof FormGroup = (props) => {
  return <FormGroup tw="space-y-0 relative space-x-3 flex items-start" {...props} />;
};

/**
 * Return the unique id associated to the current `FormGroup` or `InlineFormGroup`.
 * This value can be used to assign a `label` `htmlFor` prop or an `input` `id`.
 */
export const useFormId = () => {
  const context = useContext(FormGroupContext);
  if (context === null) {
    throw new Error(
      "`useFormId` should be wrapped within a `FormGroup` or `InlineFormGroup`"
    );
  }
  return context.id;
};
