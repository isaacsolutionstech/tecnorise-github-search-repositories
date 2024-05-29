import { ModalState } from "./modal";
import { SearchState } from "./search";
import { RepositoriesState } from "./repositories";

export interface ReduxRootState {
  modal: ModalState;
  search: SearchState;
  github: RepositoriesState
}
