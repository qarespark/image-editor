import type { Values } from '../../utils/types';
import type { LabelProps } from '../label';
import { AddTagType, Background } from './types';

export type TagFieldBackgroundType = Values<typeof Background>;
export type AddTagTypesType = Values<typeof AddTagType>;
export type TagType = string | object | null | undefined;
export type SuggestionsFilterFnType = (
  suggestions: TagType[],
  userInput: string,
  getTagLabel: (tag: TagType) => string
) => TagType[];

export interface TagFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: TagType[];
  suggestedTags?: TagType[];
  onAdd: (item: TagType, type: AddTagTypesType) => void;
  onRemove: (index: number, value: string) => void;
  getTagLabel?: (tag: TagType) => string;
  getTagValue?: (tag: TagType) => string;
  fullWidth?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  LabelProps?: LabelProps;
  hint?: React.ReactNode;
  error?: boolean;
  loading?: boolean;
  background?: TagFieldBackgroundType;
  suggestionsFilter?: SuggestionsFilterFnType;
  suggestionLabel?: React.ReactNode;
}

export interface TagFieldWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean;
  background?: TagFieldBackgroundType;
}
